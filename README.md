# suddennorth.com

Marketing site for Sudden North, LLC — Next.js (App Router) deployed on AWS Amplify from `main`.

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build (what Amplify runs)
```

## Structure

- `src/app/` — routes: `/` (home), `/services` (Capabilities), `/about` (Company), `/contact`, plus `/products/safestream/privacy-policy` (kept live for the App Store listing).
- `src/components/` — `SiteHeader` (sticky header + full-screen mobile menu), `SiteFooter`, `TerminalLogo` (animated logo), `ContactForm` (writes to Firestore).
- `src/lib/navigation.js` — single source for nav links used by the header, mobile menu, and footer.
- `src/app/globals.css` — all site styles. Fonts (Inter Tight + IBM Plex Mono) load through `next/font` in `layout.js`.
- `firestore.rules` — security rules for the contact form collection.

## Terminal logo

The header/footer logo is inline SVG with outlined lettering. The cursor blinks at rest and types `cd /home` on hover.
To change the hover command, run `python3 scripts/build-terminal-logo.py "your command"` (see the script header for requirements).
