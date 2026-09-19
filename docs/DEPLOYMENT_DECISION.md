# Deployment decision

## Recommendation

Use GitHub Pages for the static portfolio and a separate Cloudflare Worker for the optional AI recruiter assistant. This matches Joseph's approval, keeps the core site at $0, and lets the AI feature fail independently.

| Area | GitHub Pages | Vercel Hobby | Decision |
| --- | --- | --- | --- |
| Static React hosting | Strong | Strong | GitHub Pages |
| Project routing | Requires prebuilt route directories or fallback | Native rewrite support | Prebuilt directories solve this |
| Forms | None | Serverless available | No form; LinkedIn only |
| Analytics | External GA4 | Vercel analytics available | Consent-controlled GA4 |
| Custom domain | Supported | Supported | GitHub Pages later |
| Preview deployments | Separate branch/environment setup | Built in | Local and Actions artifact for Phase 1 |
| Cost | Free public repository hosting | Hobby is free but has plan-use constraints | GitHub Pages |
| Future AI | Separate backend required | Functions available | Cloudflare Worker approved |
| Maintenance | Minimal | Minimal | GitHub Pages aligns with repository |

## Routing

The Vite build uses `/CV-Joseph-Hanna/` as its base. `scripts/postbuild.mjs` creates an `index.html` for every approved route so direct navigation works without a general server rewrite.

## AI backend

The Worker binds Workers AI and KV. KV stores short-lived counters only. The deployment requires Joseph's Cloudflare account, an approved Worker URL, and an allowed frontend origin. Free allocation and model availability can change, so verify Cloudflare's current limits before enabling deployment.

## Costs

- GitHub Pages: $0 for the approved public repository use case.
- Cloudflare Worker, Workers AI, and KV: target $0 within current free allocations; the endpoint becomes unavailable instead of incurring paid overages.
- GA4: $0 standard property.
- Custom domain: optional registrar cost, not part of Phase 1 launch.
