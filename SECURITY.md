# Security policy

## Reporting

Report security or privacy concerns through Joseph Hanna's LinkedIn profile. Do not include sensitive exploit details in a public issue.

## Supported version

Only the current `main` branch and live GitHub Pages release are supported.

## Security controls

- Static frontend with no embedded secrets
- Source maps disabled in production
- No contact form or authentication surface
- Dependency, code, and secret checks in CI
- Cloudflare Worker isolates AI provider access from the browser
- Worker origin restriction, payload limits, daily quota, per-IP burst protection, and refusal rules
- No AI conversation persistence

GitHub Pages does not support repository-defined response headers. `_headers` documents the intended CSP for compatible hosts, but it is not enforced by GitHub Pages. Do not represent it as active there.
