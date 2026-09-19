const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined

if (measurementId) {
  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag(...args: unknown[]) { window.dataLayer.push(args) }
  window.gtag('consent', 'default', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    wait_for_update: 500,
  })
  window.gtag('js', new Date())
  window.gtag('config', measurementId, { anonymize_ip: true, allow_google_signals: false })
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`
  document.head.appendChild(script)
  const saved = localStorage.getItem('analytics-consent')
  if (saved === 'granted' || saved === 'denied') window.gtag('consent', 'update', { analytics_storage: saved })
}
