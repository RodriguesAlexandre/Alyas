import { useEffect, useRef, useState } from 'react';
import { X, Check, ArrowUp } from 'lucide-react';

const BARRAS = 28;
const SR = () => (typeof window !== 'undefined' ? (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition : null);
export const temVoz = () => !!SR();

/**
 * Gravação por voz no estilo do app do Claude: barrinhas que reagem à voz, cronômetro,
 * texto aparecendo enquanto fala. ✓ coloca o texto na caixa; ↑ envia direto; ✕ cancela.
 */
export default function Voz({ onTexto, onEnviar, onFechar }: { onTexto: (t: string) => void; onEnviar: (t: string) => void; onFechar: () => void }) {
  const [niveis, setNiveis] = useState<number[]>(() => Array(BARRAS).fill(0.08));
  const [final, setFinal] = useState('');
  const [parcial, setParcial] = useState('');
  const [seg, setSeg] = useState(0);
  const [erro, setErro] = useState('');
  const rec = useRef<any>(null), stream = useRef<MediaStream | null>(null), ctx = useRef<AudioContext | null>(null), raf = useRef(0);
  const ativo = useRef(true), textoRef = useRef(''), falando = useRef(0);
  textoRef.current = (final + ' ' + parcial).trim();

  useEffect(() => {
    const Rec = SR(); if (!Rec) { setErro('Este navegador não tem reconhecimento de voz.'); return; }
    const r = new Rec(); rec.current = r;
    r.lang = 'pt-BR'; r.interimResults = true; r.continuous = true; r.maxAlternatives = 1;
    r.onresult = (e: any) => {
      let fin = '', par = '';
      for (let i = 0; i < e.results.length; i++) { const t = e.results[i][0].transcript; if (e.results[i].isFinal) fin += t + ' '; else par += t; }
      setFinal(fin.trim()); setParcial(par); falando.current = Date.now();
    };
    r.onerror = (e: any) => { if (e.error === 'not-allowed' || e.error === 'service-not-allowed') setErro('Permita o microfone para o AleYas nas configurações do navegador.'); else if (e.error !== 'no-speech' && e.error !== 'aborted') setErro('O microfone parou (' + e.error + '). Toque em ✓ para usar o que já foi dito.'); };
    r.onend = () => { if (ativo.current) { try { r.start(); } catch { /* já reiniciando */ } } };
    try { r.start(); } catch { /* */ }

    // Ondas: nível real do microfone quando o navegador permite; senão, animação guiada pela fala reconhecida.
    let analyser: AnalyserNode | null = null; let dados: Uint8Array | null = null;
    navigator.mediaDevices?.getUserMedia?.({ audio: { echoCancellation: true, noiseSuppression: true } }).then(s => {
      if (!ativo.current) { s.getTracks().forEach(t => t.stop()); return; }
      stream.current = s; const C = (window as any).AudioContext || (window as any).webkitAudioContext; const ac: AudioContext = new C(); ctx.current = ac;
      analyser = ac.createAnalyser(); analyser.fftSize = 512; analyser.smoothingTimeConstant = 0.6; ac.createMediaStreamSource(s).connect(analyser); dados = new Uint8Array(analyser.fftSize);
    }).catch(() => { /* segue com animação simulada */ });

    let ultimo = 0; const t0 = Date.now();
    const loop = (t: number) => {
      raf.current = requestAnimationFrame(loop);
      if (t - ultimo < 70) return; ultimo = t;
      let nivel: number;
      if (analyser && dados) { analyser.getByteTimeDomainData(dados as any); let soma = 0; for (let i = 0; i < dados.length; i++) { const v = (dados[i] - 128) / 128; soma += v * v; } nivel = Math.min(1, Math.sqrt(soma / dados.length) * 4.5); }
      else { const ativoFala = Date.now() - falando.current < 600; nivel = ativoFala ? 0.25 + Math.random() * 0.6 : 0.05 + Math.random() * 0.05; }
      setNiveis(n => [...n.slice(1), Math.max(0.06, nivel)]);
      setSeg(Math.floor((Date.now() - t0) / 1000));
    };
    raf.current = requestAnimationFrame(loop);
    return () => parar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function parar() {
    if (!ativo.current && !ctx.current && !stream.current) return;
    ativo.current = false; cancelAnimationFrame(raf.current);
    try { rec.current?.stop(); } catch { /* */ }
    stream.current?.getTracks().forEach(t => t.stop()); stream.current = null;
    const c = ctx.current; ctx.current = null; if (c && c.state !== 'closed') c.close().catch(() => {});
  }
  const concluir = (enviar: boolean) => { const t = textoRef.current; parar(); if (t) (enviar ? onEnviar : onTexto)(t); onFechar(); };
  const mm = String(Math.floor(seg / 60)).padStart(1, '0') + ':' + String(seg % 60).padStart(2, '0');

  return <div className="voz" role="group" aria-label="Gravando voz">
    <div className="voz-texto" aria-live="polite">{erro ? <span className="voz-erro">{erro}</span> : final || parcial ? <>{final} <i>{parcial}</i></> : <span className="voz-dica">Pode falar… ex.: “coloca café e arroz na lista”</span>}</div>
    <div className="voz-barra">
      <button type="button" className="voz-btn cancelar" aria-label="Cancelar" onClick={() => { parar(); onFechar(); }}><X size={18} /></button>
      <div className="voz-ondas" aria-hidden="true">{niveis.map((n, i) => <i key={i} style={{ height: Math.round(4 + n * 26) + 'px' }} />)}</div>
      <span className="voz-tempo">{mm}</span>
      <button type="button" className="voz-btn ok" aria-label="Usar o texto" onClick={() => concluir(false)}><Check size={18} /></button>
      <button type="button" className="voz-btn enviar" aria-label="Enviar agora" onClick={() => concluir(true)}><ArrowUp size={18} /></button>
    </div>
  </div>;
}
