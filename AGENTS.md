# Project instructions

## Evidence and privacy

- Use only Joseph-approved public facts. Never infer metrics, authority, dates, titles, credentials, budgets, savings, or team sizes.
- `source-materials/`, `upload/`, `private/`, and `docs/private/` must remain outside Git.
- The private claim register is not a public repository artifact. Use `docs/CLAIM_REGISTER_TEMPLATE.md` only as the public-safe template.
- Never publish private email, phone, address, ZIP code, compensation, reference contacts, signatures, identifiers, employer secrets, internal URLs, or security architecture.
- No recommendations or testimonials at any phase.

## Architecture

- Keep the portfolio static-first and usable without AI, analytics, cookies, or client-side content discovery.
- Store career content in typed local modules. Avoid duplicating facts across components.
- Preserve GitHub Pages base path `/CV-Joseph-Hanna/`.
- Keep AI in the separate `worker/` deployment. It may answer only from approved public knowledge, must cite sources, and must not persist conversations.
- Do not add paid services, databases, authentication, or additional trackers without written approval and a cost/privacy review.

## Required verification

Before proposing a release run: `npm ci`, `npm run typecheck`, `npm run lint`, `npm test`, `npm run build`, `npm run check:links`, Playwright smoke tests, accessibility scan, Lighthouse, secret scan, dependency audit, and manual mobile/desktop review.

## Prohibited actions

- Do not deploy, enable analytics, configure a domain, publish case studies, or deploy the AI Worker without Joseph's explicit prepublication approval.
- Do not commit `.env` files, source documents, private claim registers, or unresolved placeholders.
- Do not claim that supported business growth was caused solely by IT.
