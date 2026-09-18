# Release and rollback

## Release checklist

1. Obtain every sign-off in `PRIVACY_AND_PUBLICATION_REVIEW.md`.
2. Confirm `git status` contains no source materials, private records, or environment files.
3. Run installation, typecheck, lint, unit tests, build, link check, Playwright, accessibility, Lighthouse, secret scan, and dependency audit.
4. Review mobile and desktop screenshots against the approved design.
5. Configure GA4 only after property settings are verified.
6. Deploy and evaluate the Worker separately, then set `VITE_AI_API_URL`.
7. Enable the Pages workflow and verify the live HTTPS deployment.
8. Smoke-test navigation, resume download, consent, LinkedIn, AI citations/refusals, 404, and direct routes.
9. Tag the approved release.

## Rollback

1. Disable the AI endpoint variable or Worker route first if the incident is AI-specific.
2. Revert the release commit through a reviewed pull request or redeploy the last known-good commit.
3. Verify the previous GitHub Pages artifact is live.
4. If privacy is affected, disable Pages until the safe artifact is restored and document the incident.
5. Never roll back by restoring source documents, environment files, or private registers into Git.
