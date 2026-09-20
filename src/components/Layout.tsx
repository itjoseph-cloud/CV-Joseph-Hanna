import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ExternalLink, Menu, Moon, Sun, X } from 'lucide-react'
import { profile } from '../content/site'
import AIAssistant from './AIAssistant'
import Consent from './Consent'

const nav = [
  ['/', 'Overview'], ['/experience', 'Experience'], ['/impact', 'Impact'],
  ['/case-studies', 'Case studies'], ['/expertise', 'Expertise'], ['/credentials', 'Credentials'], ['/resume', 'Resume'],
]

export default function Layout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(() => localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && matchMedia('(prefers-color-scheme: dark)').matches))
  const location = useLocation()

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light'
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header">
      <div className="shell nav-shell">
        <Link to="/" className="brand" aria-label="Joseph Hanna home">
          <span className="brand-mark" aria-hidden="true">JH</span>
          <span><strong>Joseph Hanna</strong><small>Executive Technology Leadership</small></span>
        </Link>
        <button className="menu-button" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
        <nav aria-label="Primary navigation" className={open ? 'nav open' : 'nav'}>
          {nav.map(([path, label]) => <NavLink key={path} to={path} end={path === '/'} onClick={() => setOpen(false)}>{label}</NavLink>)}
        </nav>
        <button className="theme-button" onClick={() => setDark(!dark)} aria-label={`Use ${dark ? 'light' : 'dark'} mode`}>{dark ? <Sun /> : <Moon />}</button>
      </div>
    </header>
    <main id="main">{children}</main>
    <footer>
      <div className="shell footer-grid">
        <div><strong>{profile.name}</strong><p>Secure, scalable, practical technology leadership.</p></div>
        <div><p>{profile.location}</p><a className="inline-link" href={profile.linkedin} target="_blank" rel="noreferrer"><ExternalLink size={18} /> Connect on LinkedIn</a></div>
        <div className="footer-links"><Link to="/privacy">Privacy</Link><Link to="/about">About</Link><button className="link-button" onClick={() => window.dispatchEvent(new Event('open-consent'))}>Privacy choices</button></div>
      </div>
      <div className="shell legal">© {new Date().getFullYear()} Joseph Hanna. Career content and media all rights reserved.</div>
    </footer>
    <AIAssistant />
    <Consent />
  </>
}
