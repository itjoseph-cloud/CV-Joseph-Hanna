import { useState } from 'react'
import { Bot, Send, X } from 'lucide-react'

type Message = { role: 'user' | 'assistant'; text: string; sources?: { title: string; url: string }[] }

const starters = ['What leadership scope has Joseph handled?', 'Tell me about his ERP experience.', 'What measurable outcomes has he delivered?']

export default function AIAssistant() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [busy, setBusy] = useState(false)
  const [messages, setMessages] = useState<Message[]>([{ role: 'assistant', text: 'I answer recruiter questions using only Joseph’s approved public portfolio content and cite my sources.' }])

  async function ask(question: string) {
    if (!question.trim() || busy) return
    const user: Message = { role: 'user', text: question.trim() }
    setMessages(m => [...m, user]); setInput(''); setBusy(true)
    const endpoint = import.meta.env.VITE_AI_API_URL as string | undefined
    if (!endpoint) {
      setMessages(m => [...m, { role: 'assistant', text: 'The AI assistant is not connected in this preview. Joseph’s verified experience, impact, and case studies remain available throughout the site.' }]); setBusy(false); return
    }
    try {
      const response = await fetch(endpoint, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ question: user.text, history: messages.slice(-4).map(({ role, text }) => ({ role, text })) }) })
      const data = await response.json() as { answer?: string; sources?: { title: string; url: string }[]; error?: string }
      if (!response.ok) throw new Error(data.error || 'Assistant unavailable')
      setMessages(m => [...m, { role: 'assistant', text: data.answer || 'I do not have enough approved information to answer that.', sources: data.sources }])
    } catch {
      setMessages(m => [...m, { role: 'assistant', text: 'The AI assistant is temporarily unavailable. Please use the cited portfolio pages or connect with Joseph on LinkedIn.' }])
    } finally { setBusy(false) }
  }

  return <div className="ai-wrap">
    {open && <section className="ai-panel" aria-label="AI recruiter assistant">
      <header><div><span className="ai-label"><Bot size={16} /> AI assistant</span><strong>Ask about Joseph’s experience</strong></div><button aria-label="Close AI assistant" onClick={() => setOpen(false)}><X /></button></header>
      <div className="ai-messages" aria-live="polite">{messages.map((m, i) => <div key={i} className={`message ${m.role}`}><p>{m.text}</p>{m.sources?.length ? <ul>{m.sources.map(s => <li key={s.url}><a href={s.url}>{s.title}</a></li>)}</ul> : null}</div>)}</div>
      {messages.length === 1 && <div className="starters">{starters.map(s => <button key={s} onClick={() => ask(s)}>{s}</button>)}</div>}
      <form onSubmit={e => { e.preventDefault(); void ask(input) }}><label className="sr-only" htmlFor="ai-question">Question</label><input id="ai-question" value={input} maxLength={500} onChange={e => setInput(e.target.value)} placeholder="Ask a recruiter question"/><button aria-label="Send question" disabled={busy || !input.trim()}><Send /></button></form>
      <p className="ai-note">Uses approved public content only. No conversation storage. <a href="/CV-Joseph-Hanna/privacy">Details</a></p>
    </section>}
    <button className="ai-launch" onClick={() => setOpen(!open)} aria-expanded={open}><Bot /> <span>Ask Joseph’s AI assistant</span></button>
  </div>
}
