# Design system

## Direction

Board-ready and calm, with strong hierarchy and system-oriented geometry. The visual identity avoids résumé-template conventions, decorative dashboards, rating bars, and unverified imagery.

## Tokens

| Role | Light | Dark | Use |
| --- | --- | --- | --- |
| Deep navy | `#071A2B` | `#071A2B` | Primary authority, footer, high-emphasis surfaces |
| Teal | `#066E66` | `#066E66` | Actions, evidence labels, focus and links |
| Bright teal | `#27C2B0` | `#27C2B0` | Focus ring and selected accents |
| Warm white | `#F8F5EE` | `#07131E` | Page background |
| Surface | `#FFFFFF` | `#102534` | Cards and contained content |
| Ink | `#102333` | `#EEF6F4` | Primary text |

Typography uses a native system stack led by Aptos and Segoe UI. This avoids a third-party font request while retaining a clean executive tone.

## Layout and components

- Maximum shell: 1180 px with 40 px desktop and 28 px mobile outer spacing.
- Responsive navigation collapses below 1000 px.
- Cards use 18 px radii, restrained borders, and low-elevation shadows.
- Metrics always include employer context and never function as decorative counters.
- Case studies use consistent evidence sections and sanitized detail.
- The AI launcher is fixed, labeled, keyboard accessible, and removable without breaking navigation.

## Accessibility and motion

- Visible skip link and focus rings.
- Native buttons, links, headings, lists, and landmark regions.
- Minimum 48 px primary actions where practical.
- No information is conveyed by color alone.
- Motion is limited to small hover changes and disabled under `prefers-reduced-motion`.
- Light and dark colors require automated and manual contrast review before release.

## Imagery and charts

Only Joseph's approved headshot is used. No stock people photography. Impact is shown as text-based evidence cards because charts would imply comparable baselines that the source evidence does not support.
