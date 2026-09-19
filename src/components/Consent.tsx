import { useEffect, useState } from 'react'

type Choice = 'granted' | 'denied' | null

declare global { interface Window { dataLayer: unknown[]; gtag?: (...args: unknown[]) => void } }

function applyConsent(choice: Exclude<Choice, null>) {
  window.gtag?.('consent', 'update', { analytics_storage: choice })
  localStorage.setItem('analytics-consent', choice)
  if (choice === 'granted') window.gtag?.('event', 'consent_granted')
}

export default function Consent() {
  const [visible, setVisible] = useState(() => !localStorage.getItem('analytics-consent'))
  useEffect(() => {
    const open = () => setVisible(true)
    window.addEventListener('open-consent', open)
    return () => window.removeEventListener('open-consent', open)
  }, [])
  if (!visible) return null
  const choose = (choice: Exclude<Choice, null>) => { applyConsent(choice); setVisible(false) }
  return <aside className="consent" aria-label="Analytics privacy choices" role="dialog" aria-modal="false">
    <strong>Your privacy choices</strong>
    <p>With permission, anonymous usage data helps improve this portfolio. No advertising features or AI conversation text are collected.</p>
    <div><button className="button secondary" onClick={() => choose('denied')}>Decline analytics</button><button className="button" onClick={() => choose('granted')}>Allow analytics</button></div>
  </aside>
}
