# Joseph Hanna Executive Portfolio

An evidence-led executive career portfolio for Joseph Hanna, positioning him for VP of IT, Head of IT, Director of IT, and CIO-track opportunities. The site is static-first, accessible, privacy-conscious, and deployable to GitHub Pages. A separate optional Cloudflare Worker provides a source-bound AI recruiter assistant.

## Architecture

- React, TypeScript strict mode, Vite, React Router
- Typed local content in `src/content/site.ts`
- Static route copies and page-specific metadata generated after build
- GitHub Pages frontend with no database or server requirement
- Optional Cloudflare Workers AI endpoint in `worker/`
- Consent-controlled GA4, disabled unless `VITE_GA_MEASUREMENT_ID` is configured
- Sanitized three-page executive PDF resume in `public/resume/`

## Setup and commands

```bash
npm install
npm run dev
npm run typecheck
npm run lint
npm test
npm run build
npm run check:links
npm run preview
```

Run browser tests after installing Chromium with `npx playwright install chromium`, then `npm run test:e2e`.

## Deployment

GitHub Actions builds and publishes `dist/` to GitHub Pages only after the publication gate has been approved and the workflow is enabled. The Cloudflare Worker is deployed separately so the static site remains useful when AI is unavailable. See `docs/DEPLOYMENT_DECISION.md` and `docs/RELEASE_AND_ROLLBACK.md`.

## Content maintenance

Update approved facts in `src/content/site.ts`, keep the private claim register outside Git, regenerate the PDF with `python scripts/create_resume_pdf.py`, and rerun all checks. See `docs/CONTENT_UPDATE_GUIDE.md`.

## Privacy and security

Private source files belong outside the repository and are excluded by `.gitignore`. Never commit resumes used as sources, LinkedIn exports, personal contact data, credentials, analytics identifiers, or the private claim register. See `SECURITY.md` and `docs/PRIVACY_AND_PUBLICATION_REVIEW.md`.

## License

Source code is MIT licensed. Career content, copy, professional photographs, resume content, and other media are copyright Joseph Hanna and all rights are reserved. See `LICENSE`.

## Screenshots

Add final approved mobile and desktop screenshots under `docs/screenshots/` after the prepublication review. Screenshots are intentionally not committed before content approval.
