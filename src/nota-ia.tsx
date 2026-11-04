import { useRef, useState } from 'react';
import { Camera, Link2, Check, X, ScanLine } from 'lucide-react';
import { api } from './api';
import { montarNota, notaDuplicada, registrarNota } from './nota-logic';
import { abrirCamera, soltarCamera, lerQR } from './camera';

const money = (n: number) => n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

async function fotoBase64(file: File): Promise<string> {
  const url = URL.createObjectURL(file);
  try {
    const img = await new Promise<HTMLImageElement>((ok, erro) => { const i = new Image(); i.onload = () => ok(i); i.onerror = erro; i.src = url; });
    const max = 1800, k = Math.min(1, max / Math.max(img.width, img.height));
    const c = document.createElement('canvas'); c.width = Math.round(img.width * k); c.height = Math.round(img.height * k);
    c.getContext('2d')!.drawImage(img, 0, 0, c.width, c.height);
    return c.toDataURL('image/jpeg', 0.85).split(',')[1];
  } finally { URL.revokeObjectURL(url); }
}

/** Lê a nota do mercado pelo link do QR Code ou por foto do cupom (com a IA) e registra a compra. */
export default function NotaIA({ data, save, busy }: { data: any; save: (d: any, msg?: string) => Promise<boolean>; busy: boolean }) {
  const [link, setLink] = useState('');
  const [lendo, setLendo] = useState('');
  const [erro, setErro] = useState('');
  const [nota, setNota] = useState<any>(null);
  const [tirar, setTirar] = useState(true);
  const [lendoQR, setLendoQR] = useState(false);
  const foto = useRef<HTMLInputElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const temQR = typeof navigator !== 'undefined' && !!navigator.mediaDevices?.getUserMedia;

  async function ler(p: { url?: string; image?: string }, msg: string) {
    setErro(''); setNota(null); setLendo(msg);
    try { setNota(montarNota(await api.lerNota(p))); }
    catch (e: any) { setErro(e?.code === 412 ? 'Para ler notas, ligue a IA em Nossa casa (é grátis).' : p.url ? 'Li o QR Code, mas a Sefaz ainda não liberou essa nota (cupom em contingência demora algumas horas). Tire uma foto do cupom que eu leio pelos itens.' : e?.message || 'Não consegui ler a nota.'); }
    finally { setLendo(''); }
  }
  async function escanear() {
    setErro(''); setLendoQR(true);
    await new Promise(ok => setTimeout(ok, 60));
    let stream: MediaStream | null = null;
    try {
      stream = await abrirCamera();
      const v = video.current!; v.srcObject = stream; await v.play();
      const fim = Date.now() + 40000;
      while (Date.now() < fim && v.srcObject) {
        if (v.readyState >= 2) {
          const url = await lerQR(v, v.videoWidth, v.videoHeight);
          if (/^https?:\/\//.test(url)) { v.srcObject = null; setLendoQR(false); soltarCamera(); setLink(url); return ler({ url }, 'Lendo a nota do QR Code…'); }
        }
        await new Promise(ok => setTimeout(ok, 250));
      }
      if (v.srcObject) setErro('Não achei o QR Code. Chegue mais perto, com o QR no meio da tela, ou tire uma foto do cupom.');
    } catch (e: any) { setErro(e?.name === 'NotAllowedError' ? 'Permita o uso da câmera para o AleYas e tente de novo.' : 'Não consegui abrir a câmera. Cole o link ou tire uma foto do cupom.'); }
    finally { if (video.current) video.current.srcObject = null; if (stream) soltarCamera(); setLendoQR(false); }
  }
  async function salvar() {
    if (!nota) return;
    const r = registrarNota(data, nota, tirar);
    if (await save(r.data, 'Compra de ' + money(nota.total) + ' registrada' + (r.tirados ? ' · ' + r.tirados + ' itens saíram da lista' : ''))) { setNota(null); setLink(''); }
  }
  const dup = nota && notaDuplicada(data, nota);

  return <section className="card nota-ia">
    <span className="eyebrow">NOTA FISCAL · COM IA</span>
    <h2>Chegou do mercado? Registra a nota</h2>
    <p className="muted">Escaneie o QR Code do cupom, cole o link dele ou tire uma foto. A IA lê os itens e preços, salva a compra nos gastos, marca os produtos como “tem em casa” e tira da lista o que vocês compraram.</p>
    <div className="nota-acoes">
      {temQR && <button className="primary" disabled={!!lendo || busy || lendoQR} onClick={escanear}><ScanLine size={17} /> Escanear QR Code</button>}
      <button className={temQR ? 'secondary' : 'primary'} disabled={!!lendo || busy} onClick={() => foto.current?.click()}><Camera size={17} /> Foto do cupom</button>
      <input ref={foto} type="file" accept="image/*" capture="environment" hidden onChange={async e => { const f = e.target.files?.[0]; e.target.value = ''; if (f) { try { await ler({ image: await fotoBase64(f) }, 'Lendo a foto do cupom… (uns 20 segundos)'); } catch { setErro('Não consegui abrir essa foto.'); } } }} />
    </div>
    {lendoQR && <div className="nota-video"><video ref={video} playsInline muted /><button className="secondary" onClick={() => { if (video.current) video.current.srcObject = null; soltarCamera(); setLendoQR(false); }}><X size={15} /> Cancelar</button></div>}
    <form className="nota-link" onSubmit={e => { e.preventDefault(); if (/^https?:\/\//.test(link.trim())) ler({ url: link.trim() }, 'Abrindo a nota…'); else setErro('Cole o link completo do QR Code (começa com https://).'); }}>
      <Link2 size={16} /><input aria-label="Link da nota fiscal" placeholder="Cole aqui o link do QR Code da nota" value={link} onChange={e => setLink(e.target.value)} />
      <button className="secondary" disabled={!!lendo || busy || !link.trim()}>Ler</button>
    </form>
    {lendo && <p className="nota-status" role="status"><span className="dot-pulse" /> {lendo}</p>}
    {erro && <p className="alert" role="alert">{erro}</p>}
    {nota && <div className="nota-preview">
      <div className="nota-cab"><div><b>{nota.store}</b><small>{new Date(nota.date).toLocaleDateString('pt-BR')} · {nota.items.length} itens</small></div><strong>{money(nota.total)}</strong></div>
      {nota.reviewNote && <p className="notice">{nota.reviewNote}. Confira antes de salvar.</p>}
      {dup && <p className="notice">Parece que essa compra já está registrada (mesma nota ou mesmo dia e valor).</p>}
      <ul>{nota.items.map((i: any) => <li key={i.id}><span>{i.name}<small>{String(i.qty).replace('.', ',')} {i.unit} × {money(i.price || 0)} · {i.cat}</small></span><b>{money(i.lineTotal)}</b><button className="icon-btn" aria-label={'Tirar ' + i.name} onClick={() => { const items = nota.items.filter((x: any) => x.id !== i.id); setNota({ ...nota, items }); }}><X size={14} /></button></li>)}</ul>
      <label className="nota-check"><input type="checkbox" checked={tirar} onChange={e => setTirar(e.target.checked)} /> Tirar da lista de compras o que veio na nota</label>
      <div className="nota-acoes"><button className="primary" disabled={busy || !nota.items.length} onClick={salvar}><Check size={17} /> Salvar compra</button><button className="secondary" onClick={() => setNota(null)}>Descartar</button></div>
    </div>}
  </section>;
}
