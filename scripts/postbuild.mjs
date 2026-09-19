import { cp, mkdir, readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

const baseUrl = 'https://itjoseph-cloud.github.io/CV-Joseph-Hanna'
const pages = {
  'about': ['Leadership Approach | Joseph Hanna', 'How Joseph Hanna leads technology strategy, operations, transformation, and teams.'],
  'experience': ['Executive IT Experience | Joseph Hanna', 'Career history spanning enterprise technology, cybersecurity, ERP, infrastructure, and operations.'],
  'impact': ['Technology Leadership Impact | Joseph Hanna', 'Verified business outcomes across reliability, risk, efficiency, growth, and adoption.'],
  'case-studies': ['IT Transformation Case Studies | Joseph Hanna', 'Evidence-based stories covering ERP, cybersecurity, cloud collaboration, infrastructure, and global operations.'],
  'expertise': ['Technology Leadership Expertise | Joseph Hanna', 'Business-aligned IT strategy, cybersecurity, cloud, enterprise applications, and service delivery.'],
  'credentials': ['Education and Credentials | Joseph Hanna', 'Approved education, certifications, and professional development.'],
  'resume': ['Executive Resume | Joseph Hanna', 'Recruiter-friendly resume for VP of IT, Head of IT, Director of IT, and CIO-track roles.'],
  'privacy': ['Privacy | Joseph Hanna Portfolio', 'Privacy choices and disclosures for analytics and the AI recruiter assistant.'],
  'case-studies/repipe-scalable-it': ['Scalable IT Operating Model | Joseph Hanna', 'How Joseph built a scalable IT operating model at Repipe Specialists.'],
  'case-studies/repipe-netsuite': ['NetSuite Leadership Case Study | Joseph Hanna', 'Business-owned NetSuite implementation, integrations, and administration.'],
  'case-studies/jaidah-enterprise-platforms': ['Enterprise ERP Modernization | Joseph Hanna', 'SAP S/4HANA and Incadea transformation across 17 subsidiaries.'],
  'case-studies/jaidah-data-center': ['Data Center Transformation | Joseph Hanna', 'A resilient multi-tenant data-center build and migration.'],
  'case-studies/safeway-microsoft-365': ['Microsoft 365 Transformation | Joseph Hanna', 'Collaboration, security, adoption, and operational improvement at SafewayTax.'],
  'case-studies/global-end-user-operations': ['Global End-User Operations | Joseph Hanna', 'Global and 24/7 end-user operations leadership at scale.'],
}
const template = await readFile('dist/index.html', 'utf8')
for (const [path, [title, description]] of Object.entries(pages)) {
  const dir = join('dist', path)
  await mkdir(dir, { recursive: true })
  const canonical = `${baseUrl}/${path}`
  const html = template
    .replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
    .replace(/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${description}" />`)
    .replace(/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${canonical}" />`)
    .replace('property="og:title" content="Joseph Hanna | Executive Technology Leadership"', `property="og:title" content="${title}"`)
    .replace('property="og:description" content="Business-minded technology leadership across strategy, cybersecurity, cloud, enterprise applications, and operations."', `property="og:description" content="${description}"`)
  await writeFile(join(dir, 'index.html'), html)
}
await cp('dist/index.html', 'dist/404.html')
const urls = ['', ...Object.keys(pages)].map(path => `  <url><loc>${baseUrl}/${path}</loc><changefreq>monthly</changefreq><priority>${path ? '0.8' : '1.0'}</priority></url>`).join('\n')
await writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`)
