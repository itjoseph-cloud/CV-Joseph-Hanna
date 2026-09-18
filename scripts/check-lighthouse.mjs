import { readFile } from 'node:fs/promises'

const thresholds = { performance: 0.90, accessibility: 0.95, 'best-practices': 0.95, seo: 0.95 }
const reports = ['reports/lighthouse-mobile.json', 'reports/lighthouse-desktop.json']
let failed = false

for (const reportPath of reports) {
  const report = JSON.parse(await readFile(reportPath, 'utf8'))
  console.log(`\n${reportPath}`)
  for (const [category, minimum] of Object.entries(thresholds)) {
    const score = report.categories?.[category]?.score
    console.log(`${category}: ${Math.round((score ?? 0) * 100)} (minimum ${minimum * 100})`)
    if (typeof score !== 'number' || score < minimum) failed = true
  }
}

if (failed) throw new Error('One or more Lighthouse acceptance thresholds were not met.')
console.log('\nLighthouse acceptance thresholds passed.')
