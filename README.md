# SHIPSAFE AI Landing Page

A static, Vercel-ready conversion site for **SHIPSAFE AI — The Vibe Coding Agent Launch Guardrail Kit**.

## What is included

- Long-form launch page for the SHIPSAFE AI offer
- 12-point AI app launch-risk scanner
- Product bundle breakdown
- Pricing architecture for Solo, Founder, and Agency tiers
- Seven-day campaign section for the Google/Kaggle AI Agents event timing
- Vercel configuration with clean URLs and security headers

## Local development

Open `index.html` directly in a browser or serve the directory with any static server:

```bash
python3 -m http.server 4173
```

Then visit `http://127.0.0.1:4173/index.html`.

## Checks

```bash
npm run check
npm run build
```

The `build` script runs the static validation check so Vercel has a deployment command without requiring a framework build step.

## Vercel deployment

1. Push this repository's `main` branch to GitHub.
2. Import the repository in Vercel.
3. Use the default static site settings:
   - Framework Preset: Other
   - Build Command: `npm run build`
   - Output Directory: `.`
4. Deploy.
