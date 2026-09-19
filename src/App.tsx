import { useEffect, useState } from 'react'
import { Link, Route, Routes, useLocation, useParams } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Download, ExternalLink, MapPin, Printer, ShieldCheck } from 'lucide-react'
import Layout from './components/Layout'
import PageHeader from './components/PageHeader'
import ImpactCard from './components/ImpactCard'
import AIAssistant from './components/AIAssistant'
import { caseStudies, credentials, expertise, impacts, profile, roles, type ImpactCategory } from './content/site'

const base = 'https://itjoseph-cloud.github.io/CV-Joseph-Hanna'
const meta: Record<string, [string, string]> = {
  '/': ['Joseph Hanna | Executive Technology Leadership', 'IT executive building secure, scalable technology operations aligned to business priorities.'],
  '/about': ['Leadership Approach | Joseph Hanna', 'How Joseph Hanna leads technology strategy, operations, transformation, and teams.'],
  '/experience': ['Executive IT Experience | Joseph Hanna', 'Career history spanning enterprise technology, cybersecurity, ERP, infrastructure, and operations.'],
  '/impact': ['Technology Leadership Impact | Joseph Hanna', 'Verified business outcomes across reliability, risk, efficiency, growth, and adoption.'],
  '/case-studies': ['IT Transformation Case Studies | Joseph Hanna', 'Evidence-based stories covering ERP, cybersecurity, cloud collaboration, infrastructure, and global operations.'],
  '/expertise': ['Technology Leadership Expertise | Joseph Hanna', 'Business-aligned IT strategy, cybersecurity, cloud, enterprise applications, and service delivery.'],
  '/credentials': ['Education and Credentials | Joseph Hanna', 'Education, certifications, and professional development for executive technology leadership.'],
  '/resume': ['Executive Resume | Joseph Hanna', 'Recruiter-friendly resume for VP of IT, Head of IT, Director of IT, and CIO-track roles.'],
  '/privacy': ['Privacy | Joseph Hanna Portfolio', 'Privacy choices and disclosures for analytics and the AI recruiter assistant.'],
}

function Metadata() {
  const { pathname } = useLocation()
  useEffect(() => {
    const key = pathname.startsWith('/case-studies/') ? '/case-studies' : pathname
    const [title, description] = meta[key] || meta['/']
    document.title = title
    document.querySelector('meta[name="description"]')?.setAttribute('content', description)
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', `${base}${pathname === '/' ? '/' : pathname}`)
  }, [pathname])
  return null
}

function Home() {
  return <>
    <section className="hero"><div className="shell hero-grid">
      <div className="hero-copy"><p className="eyebrow">{profile.positioning}</p><h1>{profile.statement}</h1><p className="lede">{profile.impact}</p><p className="hero-proof"><ShieldCheck /> {profile.proof}</p><p className="location"><MapPin /> {profile.location}</p>
        <div className="actions"><Link className="button" to="/impact">View verified impact <ArrowRight /></Link><a className="button secondary" href="/CV-Joseph-Hanna/resume/Joseph_Hanna_Executive_Resume.pdf" download>Download resume <Download /></a><a className="text-cta" href={profile.linkedin} target="_blank" rel="noreferrer"><ExternalLink /> Connect</a></div>
      </div>
      <div className="portrait-wrap"><div className="portrait-frame"><img src="/CV-Joseph-Hanna/assets/joseph-hanna-headshot.webp" alt="Joseph Hanna, executive technology leader" width="640" height="640" /></div><div className="scope-card"><span>Leadership scope</span><strong>17 subsidiaries</strong><p>1,250 employees supported within one holding group</p></div></div>
    </div></section>
    <section className="signal-strip"><div className="shell signal-grid"><div><strong>20+ years</strong><span>Technology leadership</span></div><div><strong>99.99%</strong><span>Data-center availability</span></div><div><strong>40%</strong><span>Vulnerability exposure reduced</span></div><div><strong>2,800</strong><span>Global employees supported</span></div></div></section>
    <section className="section"><div className="shell"><div className="section-head"><div><p className="eyebrow">Selected outcomes</p><h2>Technology translated into business results</h2></div><Link to="/impact">All verified impact <ArrowRight /></Link></div><div className="metric-grid">{impacts.slice(0, 4).map(m => <ImpactCard key={m.value + m.label} metric={m} />)}</div></div></section>
    <section className="section tinted"><div className="shell"><div className="section-head"><div><p className="eyebrow">Transformation evidence</p><h2>How Joseph leads consequential change</h2></div><Link to="/case-studies">All case studies <ArrowRight /></Link></div><div className="story-grid">{caseStudies.slice(0,3).map(c => <Link className="story-card" key={c.slug} to={`/case-studies/${c.slug}`}><span>{c.employer}</span><h3>{c.title}</h3><p>{c.summary}</p><strong>Read the case study <ArrowRight /></strong></Link>)}</div></div></section>
    <section className="section executive"><div className="shell split"><div><p className="eyebrow">Operating philosophy</p><h2>Practical strategy. Clear ownership. Measurable outcomes.</h2></div><div><p>I lead from business priorities outward: understand the operating constraint, decide what must change, create accountable delivery, and make the result usable for people.</p><Link className="button secondary" to="/about">Leadership approach <ArrowRight /></Link></div></div></section>
    <AIAssistant />
  </>
}

function About() { return <><PageHeader eyebrow="Leadership narrative" title="Technology leadership grounded in business reality" intro="Joseph combines executive judgment, technical depth, and operating discipline to make technology secure, scalable, resilient, and easier for people to use."/><section className="section"><div className="shell prose-grid"><article><h2>How I lead</h2><p>I start with the business decision, risk, or operating constraint. Technology matters when it improves how the organization performs, protects what it values, and gives people a dependable way to work.</p><p>My role is to create clarity: which outcomes matter, which risks deserve attention, where investment earns its place, and who owns the result. I am comfortable setting direction in the executive room and working closely enough with teams and partners to know whether execution is real.</p><p>Across growing companies, global environments, and multi-entity groups, I have built teams, governed vendors, modernized platforms, strengthened security, and led change through adoption.</p></article><aside className="principles"><h2>Operating principles</h2>{['Translate technology into business choices.', 'Design ownership before selecting tools.', 'Treat cybersecurity as operating discipline.', 'Build for adoption, not only deployment.', 'Use evidence to prioritize and improve.', 'Keep complexity proportionate to value.'].map(p => <p key={p}><CheckCircle2 /> {p}</p>)}</aside></div></section></> }

function Experience() { return <><PageHeader eyebrow="Career history" title="Leadership progression and operating scope" intro="A recruiter-friendly view of roles, scale, decision authority, and approved outcomes."/><section className="section"><div className="shell timeline">{roles.map((r,i) => <article key={r.employer+r.dates} className="role"><div className="role-marker">{String(i+1).padStart(2,'0')}</div><div><div className="role-head"><div><h2>{r.title}</h2><p>{r.employer}</p></div><span>{r.dates}</span></div><p className="role-scope">{r.scope}</p><ul>{r.achievements.map(a => <li key={a}>{a}</li>)}</ul></div></article>)}</div></section></> }

function Impact() {
  const cats: ('All'|ImpactCategory)[] = ['All','Growth','Efficiency','Savings','Risk','Reliability','Adoption']
  const [filter,setFilter] = useState<(typeof cats)[number]>('All')
  const shown = filter === 'All' ? impacts : impacts.filter(i => i.category === filter)
  return <><PageHeader eyebrow="Verified outcomes" title="An evidence-led view of business impact" intro="Every metric below is approved for publication and tied to a specific employer context. Categories make the portfolio easy to scan without reducing leadership to a scorecard."/><section className="section"><div className="shell"><div className="filters" aria-label="Filter impact by category">{cats.map(c => <button key={c} aria-pressed={filter===c} onClick={() => setFilter(c)}>{c}</button>)}</div><div className="metric-grid">{shown.map(m => <ImpactCard key={m.value+m.label} metric={m}/>)}</div><p className="evidence-note"><ShieldCheck /> Metrics reflect approved career facts. Unsupported savings, budget, and performance claims are intentionally excluded.</p></div></section></>
}

function CaseStudies() { return <><PageHeader eyebrow="Transformation stories" title="Decisions, execution, and verified outcomes" intro="Sanitized case studies show how Joseph approaches complex technology and operating change without exposing confidential architecture or stakeholder details."/><section className="section"><div className="shell story-grid wide">{caseStudies.map(c => <Link className="story-card" key={c.slug} to={`/case-studies/${c.slug}`}><span>{c.employer}</span><h2>{c.title}</h2><p>{c.summary}</p><div className="tags">{c.categories.map(x=><em key={x}>{x}</em>)}</div><strong>Read case study <ArrowRight /></strong></Link>)}</div></section></> }

function CaseStudy() {
  const { slug } = useParams(); const c = caseStudies.find(x=>x.slug===slug)
  if (!c) return <NotFound />
  const sections = [['Business context',c.context],['Challenge or risk',c.challenge],["Joseph's role and authority",c.role],['Constraints',c.constraints],['Change and stakeholder alignment',c.change],['Technology or operating model',c.technology]] as const
  return <><section className="case-hero"><div className="shell narrow"><Link to="/case-studies">← All case studies</Link><p className="eyebrow">{c.employer}</p><h1>{c.title}</h1><p className="lede">{c.summary}</p><div className="tags">{c.categories.map(x=><em key={x}>{x}</em>)}</div></div></section><article className="section"><div className="shell case-body">{sections.slice(0,3).map(([h,p])=><section key={h}><h2>{h}</h2><p>{p}</p></section>)}<section><h2>Strategy and key decisions</h2><ul>{c.strategy.map(x=><li key={x}>{x}</li>)}</ul></section>{sections.slice(3).map(([h,p])=><section key={h}><h2>{h}</h2><p>{p}</p></section>)}<section><h2>Execution approach</h2><ul>{c.execution.map(x=><li key={x}>{x}</li>)}</ul></section><section className="outcomes"><h2>Verified outcomes</h2><ul>{c.outcomes.map(x=><li key={x}>{x}</li>)}</ul></section><section><h2>Reusable leadership principles</h2><ul>{c.lessons.map(x=><li key={x}>{x}</li>)}</ul></section><div className="case-next"><Link to="/impact">Explore verified impact <ArrowRight /></Link></div></div></article></>
}

function Expertise() { return <><PageHeader eyebrow="Leadership capabilities" title="Executive range with credible technical depth" intro="Capabilities are framed around the business decisions Joseph leads, with selected technologies included only where they support that story."/><section className="section"><div className="shell expertise-grid">{expertise.map(([h,p],i)=><article key={h}><span>0{i+1}</span><h2>{h}</h2><p>{p}</p></article>)}</div></section></> }

function Credentials() { return <><PageHeader eyebrow="Education and development" title="Credentials that support the leadership record" intro="Approved degrees, certifications, and current AI learning. No equivalency or award claims are implied."/><section className="section"><div className="shell credential-grid"><article><h2>Education</h2>{credentials.education.map(x=><p key={x}>{x}</p>)}</article><article><h2>Professional credentials</h2><div className="credential-list">{credentials.certifications.map(x=><span key={x}>{x}</span>)}</div></article></div></section></> }

function Resume() { return <><PageHeader eyebrow="Recruiter resume" title="A concise record of leadership scope and outcomes" intro="View the career story online, print this page, or download the sanitized executive PDF."/><section className="section resume-actions"><div className="shell"><a className="button" href="/CV-Joseph-Hanna/resume/Joseph_Hanna_Executive_Resume.pdf" download><Download/> Download PDF</a><button className="button secondary" onClick={()=>window.print()}><Printer/> Print this page</button></div></section><section className="resume-sheet"><div className="resume-name"><h2>Joseph Hanna</h2><p>{profile.positioning}</p><span>{profile.location} | linkedin.com/in/joseph-g-hanna</span></div><h3>Executive profile</h3><p>{profile.impact} Business-minded leader who translates strategy into secure, practical execution.</p><h3>Selected experience</h3>{roles.map(r=><article key={r.employer+r.dates}><header><strong>{r.title} | {r.employer}</strong><span>{r.dates}</span></header><p>{r.scope}</p><ul>{r.achievements.map(a=><li key={a}>{a}</li>)}</ul></article>)}<h3>Education and credentials</h3><p>{credentials.education.join(' | ')}</p><p>{credentials.certifications.join(' | ')}</p></section></> }

function Privacy() { return <><PageHeader eyebrow="Privacy" title="Minimal data, clear choices" intro="This portfolio is designed to remain useful without analytics, cookies, or the AI assistant."/><section className="section"><div className="shell legal-prose"><h2>Public information</h2><p>The site publishes approved professional information, a sanctioned headshot, a sanitized resume, and a LinkedIn profile link. It does not publish a private email address, phone number, home address, compensation, references’ contact details, or private source documents.</p><h2>Analytics</h2><p>Google Analytics 4 is configured with advanced consent mode. Analytics storage is denied by default. If you decline, cookieless consent signals may be sent where supported. If you accept, analytics may use browser storage. Advertising features and user IDs are disabled, and user-level event data is configured for two-month retention. You can reopen Privacy choices in the footer.</p><h2>AI recruiter assistant</h2><p>The assistant is clearly labeled as AI. It answers only from approved public website and sanitized resume content, cites relevant portfolio pages, and should say when information is unavailable. It must not provide private data, confidential employer details, unsupported claims, or impersonate Joseph in negotiations, commitments, references, or legal representations.</p><p>Conversation content is not persisted by the portfolio. Only the active browser session is used for display. The backend applies a 200-question global daily limit and per-IP burst protection. Short-lived rate-limit counters may process a one-way IP-derived key, but do not store conversation text.</p><h2>Third parties</h2><p>GitHub Pages hosts the website. Cloudflare may operate the optional AI endpoint. Google provides consent-controlled analytics. LinkedIn processes visits after you choose its external link.</p><h2>Contact</h2><p>For professional contact or privacy questions, use Joseph’s <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn profile</a>.</p></div></section></> }

function NotFound() { return <section className="not-found"><div><p className="eyebrow">404</p><h1>This page is not part of the portfolio.</h1><p>The link may be outdated. The executive overview and case studies remain available.</p><Link className="button" to="/">Return to overview</Link></div></section> }

export default function App() {
  return <Layout><Metadata/><Routes><Route path="/" element={<Home/>}/><Route path="/about" element={<About/>}/><Route path="/experience" element={<Experience/>}/><Route path="/impact" element={<Impact/>}/><Route path="/case-studies" element={<CaseStudies/>}/><Route path="/case-studies/:slug" element={<CaseStudy/>}/><Route path="/expertise" element={<Expertise/>}/><Route path="/credentials" element={<Credentials/>}/><Route path="/resume" element={<Resume/>}/><Route path="/privacy" element={<Privacy/>}/><Route path="*" element={<NotFound/>}/></Routes></Layout>
}
