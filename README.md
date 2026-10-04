# suddennorth.com

Marketing site for Sudden North, LLC — Next.js (App Router) deployed on AWS Amplify from `main`.

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build (what Amplify runs)
```

## Structure

- `src/app/` — routes: `/` (home), `/services` (Capabilities), `/teaming` (Teaming With Us + capability statement), `/resources` (You Might Not Need Us hub), `/resources/cmmc-readiness`, `/resources/ai-cost-benefit`, `/resources/ai-integration-risk` (field notes), `/about` (Company), `/contact`, `/security` (vulnerability disclosure), plus `/products/safestream/privacy-policy` (kept live for the App Store listing).
- `src/components/tools/` — the client-side readiness check and AI calculator. Nothing a visitor enters leaves the browser.
- `src/data/company.json` — single source for the Teaming page and the capability statement PDF (UEI/CAGE/NAICS, competencies, teaming roles, case studies). Empty identifier values are hidden.
- `src/data/cmmcQuestions.js` — readiness questions, scoring bands, and the dated program-status note. Update `STATUS_NOTE` when DoD changes CMMC.
- `public/.well-known/security.txt` — RFC 9116 contact file. **Renew the `Expires` date before 2027-10-04.**
- `next.config.mjs` — security headers (CSP, HSTS, etc.). Re-check with securityheaders.com after any deploy that adds a third-party service.
- `src/components/` — `SiteHeader` (sticky header + full-screen mobile menu), `SiteFooter`, `TerminalLogo` (animated logo), `ContactForm` (writes to Firestore).
- `src/lib/navigation.js` — single source for nav links used by the header, mobile menu, and footer.
- `src/app/globals.css` — all site styles. Fonts (Inter Tight + IBM Plex Mono) load through `next/font` in `layout.js`.
- `firestore.rules` — security rules for the contact form collection.

## Terminal logo

The header/footer logo is inline SVG with outlined lettering. The cursor blinks at rest and types `cd /home` on hover.
To change the hover command, run `python3 scripts/build-terminal-logo.py "your command"` (see the script header for requirements).

## Capability statement PDF

`public/sudden-north-capability-statement.pdf` is generated from `src/data/company.json`:

```bash
npm i -g playwright && npx playwright install chromium   # once
node scripts/build-capability-statement.mjs
```

The script warns if the content no longer fits on one Letter page.

## Adding a case study

Add an object to `caseStudies` in `src/data/company.json` with `sector`, `title`, `challenge`, `approach`, and `outcome`. The section appears on `/teaming` automatically once the list is non-empty.
