import { useState } from 'react';
import { Bell, BellOff, Loader2 } from 'lucide-react';
import { ligarPush, desligarPush, pushLigado, suportaPush } from './notificacoes';

/** Ajustes: ligar as notificações deste aparelho. */
export function CartaoNotificacoes() {
  const [on, setOn] = useState(pushLigado()), [rodando, setRodando] = useState(false), [msg, setMsg] = useState('');
  return <section className="card trava-card"><span className="eyebrow">NOTIFICAÇÕES</span><h2>Avisos no celular</h2>
    <p className="muted">{on ? 'Ligadas neste aparelho. Quando alguém mexer na lista, na casa, nos rituais ou no cardápio em outro aparelho, chega um aviso aqui.' : 'Receba um aviso quando a outra pessoa mudar algo no app: item na lista, ritual feito, conserto lançado…'}</p>
    {!suportaPush() ? <p className="muted">Este navegador não recebe notificações.</p>
      : <button className={on ? 'secondary' : 'primary'} disabled={rodando} onClick={async () => {
        setRodando(true); setMsg('');
        try { if (on) { await desligarPush(); setOn(false); setMsg('Notificações desligadas neste aparelho.'); } else { const e = await ligarPush(); if (e) setMsg(e); else { setOn(true); setMsg('Pronto! Faça um teste: mude algo no outro aparelho.'); } } }
        catch (e: any) { setMsg(/action|desconhecid/i.test(e?.message || '') ? 'A planilha ainda não tem a parte de notificações. O Ale precisa atualizar o script.' : 'Não consegui ligar: ' + (e?.message || 'erro')); }
        finally { setRodando(false); }
      }}>{rodando ? <Loader2 className="spin" size={16} /> : on ? <BellOff size={16} /> : <Bell size={16} />} {on ? 'Desligar notificações' : 'Ligar notificações'}</button>}
    {msg && <p className="muted" role="status">{msg}</p>}
    <p className="muted"><small>Cada aparelho liga as suas. As notificações dos rituais (horário de cada um) vêm pela agenda do Google.</small></p>
  </section>;
}
