# Content update guide

## Simple workflow

1. Write the proposed fact in the private claim register with its source and approval status.
2. Obtain Joseph's approval before public wording is changed.
3. Edit `src/content/site.ts`. Keep dates, metrics, scope, and authority in the relevant typed record.
4. If the resume changes, edit `scripts/create_resume_pdf.py`, regenerate the PDF, render both pages, and visually inspect them.
5. Run all verification commands from `AGENTS.md`.
6. Review the changed page on mobile and desktop.
7. Use a pull request and complete the publication checklist.

## Writing rules

- Lead with business context and verified outcomes.
- Distinguish direct reports from coordination or indirect leadership.
- Use “supported growth” when causation is not proven.
- Do not add percentages, budgets, savings, awards, credentials, dates, or titles without an approved source.
- Remove a route when meaningful approved content is unavailable rather than publishing an empty page.
