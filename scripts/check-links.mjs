import { readFile } from 'node:fs/promises'
import { caseStudies } from '../dist-check-content.mjs'

const html = await readFile('dist/index.html', 'utf8')
if (!html.includes('/CV-Joseph-Hanna/assets/')) throw new Error('Built asset base path is incorrect.')
for (const required of ['experience','impact','case-studies','resume','privacy']) await readFile(`dist/${required}/index.html`, 'utf8')
for (const slug of caseStudies) await readFile(`dist/case-studies/${slug}/index.html`, 'utf8')
console.log('Internal route and case-study build checks passed.')
