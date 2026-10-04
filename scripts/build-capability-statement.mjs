#!/usr/bin/env node
// Builds public/sudden-north-capability-statement.pdf from src/data/company.json.
//
// Requirements (dev machine only, not a site dependency):
//   npm i -g playwright && npx playwright install chromium
// Run from the repo root:
//   node scripts/build-capability-statement.mjs
//
// The same JSON drives the /teaming page, so the website and the PDF never drift apart.

import { readFileSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const company = JSON.parse(readFileSync(join(root, 'src/data/company.json'), 'utf8'));
const outPdf = join(root, 'public/sudden-north-capability-statement.pdf');

async function loadPlaywright() {
	try { return await import('playwright'); } catch {}
	const globalRoot = execSync('npm root -g').toString().trim();
	const require = createRequire(join(globalRoot, 'noop.js'));
	return require('playwright');
}

const esc = (s = '') => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// Logo: strip the embedded C2PA metadata block so the PDF stays small.
const logoSvg = readFileSync(join(root, 'public/assets/brand/suddennorth-terminal.svg'), 'utf8').replace(/<metadata>[\s\S]*?<\/metadata>/, '');
const logo = `data:image/svg+xml;base64,${Buffer.from(logoSvg).toString('base64')}`;

const ids = company.identifiers.filter((id) => id.value);
const factRows = [
	['Business', company.designation.short],
	...ids.map((id) => [id.label, id.value]),
	['Based in', company.location],
	...(company.phone ? [['Phone', company.phone]] : []),
];

const html = `<!doctype html><html><head><meta charset="utf-8"><style>
@page { size: Letter; margin: 0; }
* { box-sizing: border-box; }
html, body { margin: 0; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
body { width: 8.5in; min-height: 11in; font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif; color: #0b1220; font-size: 9.2pt; line-height: 1.45; display: flex; flex-direction: column; }
header, footer { flex-shrink: 0; }
.mono { font-family: 'DejaVu Sans Mono', ui-monospace, monospace; }
header { background: #0b1220; color: #eef2f6; padding: 0.34in 0.55in 0.26in; position: relative; overflow: hidden; }
header::after { content: ''; position: absolute; inset: 0; background-image: linear-gradient(rgba(125,151,185,.09) 1px, transparent 1px), linear-gradient(90deg, rgba(125,151,185,.09) 1px, transparent 1px); background-size: 28px 28px; -webkit-mask-image: linear-gradient(to right, transparent 35%, #000); }
.top { position: relative; z-index: 1; display: flex; justify-content: space-between; align-items: center; }
.top img { width: 2.6in; }
.doc-label { text-align: right; font: 600 7pt/1.5 'DejaVu Sans Mono', monospace; letter-spacing: .16em; color: #3ddc97; }
.doc-label span { display: block; color: #8391a6; letter-spacing: .1em; }
.lede { position: relative; z-index: 1; margin: 0.18in 0 0; max-width: 6.7in; font-size: 10.2pt; line-height: 1.5; color: #c9d2de; }
.badge { position: relative; z-index: 1; display: inline-flex; gap: 10px; align-items: center; margin-top: 0.16in; font: 600 6.8pt/1 'DejaVu Sans Mono', monospace; letter-spacing: .1em; text-transform: uppercase; color: #9aa8bc; }
.badge b { border: 1px solid #3ddc97; color: #3ddc97; padding: 4px 6px; font-weight: 600; }
main { flex: 1; display: grid; grid-template-columns: 1fr 2.6in; }
.primary { padding: 0.28in 0.36in 0.18in 0.55in; }
.aside { background: #eef2f6; padding: 0.28in 0.4in 0.18in 0.28in; border-left: 1px solid #d5dce5; }
h2 { margin: 0 0 9px; font: 600 7.2pt/1.3 'DejaVu Sans Mono', monospace; letter-spacing: .14em; text-transform: uppercase; color: #0e7a4e; }
h2::before { content: '/ '; color: #8a98aa; }
section + section { margin-top: 0.19in; }
.comp { display: grid; grid-template-columns: 1fr 1fr; border-top: 1px solid #c9d1dc; border-left: 1px solid #c9d1dc; }
.comp div { padding: 8px 11px 9px; border-right: 1px solid #c9d1dc; border-bottom: 1px solid #c9d1dc; }
.comp h3 { margin: 0 0 5px; font-size: 10pt; font-weight: 600; }
ul { margin: 0; padding: 0; list-style: none; }
.comp li { color: #3c4859; font-size: 8.2pt; line-height: 1.42; }
.comp li::before { content: '+ '; color: #0e7a4e; font-family: 'DejaVu Sans Mono', monospace; }
.diff { display: grid; grid-template-columns: 1fr 1fr; gap: 10px 18px; }
.diff h3 { margin: 0 0 2px; font-size: 9.4pt; font-weight: 600; }
.diff p { margin: 0; color: #465369; font-size: 8.2pt; line-height: 1.4; }
.roles { display: grid; grid-template-columns: 1fr 1fr; gap: 0 18px; border-top: 1px solid #dde3ea; }
.roles li { display: grid; grid-template-columns: 20px 1fr; padding: 6px 0; border-bottom: 1px solid #dde3ea; }
.roles span { font: 600 7pt/1.6 'DejaVu Sans Mono', monospace; color: #0e7a4e; }
.roles strong { font-size: 9pt; font-weight: 600; }
.roles em { display: block; font-style: normal; color: #536074; font-size: 8pt; line-height: 1.4; }
.facts li { display: grid; grid-template-columns: 0.66in 1fr; overflow-wrap: anywhere; gap: 6px; padding: 5px 0; border-bottom: 1px solid #d5dce5; font-size: 8.2pt; }
.facts li:first-child { border-top: 1px solid #d5dce5; }
.facts span:first-child, .naics span { font: 600 6.6pt/1.6 'DejaVu Sans Mono', monospace; letter-spacing: .06em; text-transform: uppercase; color: #6a788c; }
.naics li { display: grid; grid-template-columns: 0.55in 1fr; gap: 6px; padding: 4px 0; font-size: 8pt; line-height: 1.35; }
.naics span { color: #0b1220; }
.founders p { margin: 0 0 8px; font-size: 8pt; color: #465369; }
.founders strong { display: block; color: #0b1220; font-size: 9pt; }
footer { background: #0b1220; color: #9aa8bc; padding: 0.2in 0.55in; display: flex; justify-content: space-between; align-items: center; font: 500 7pt/1.4 'DejaVu Sans Mono', monospace; letter-spacing: .06em; }
footer b { color: #3ddc97; font-weight: 600; }
</style></head><body>
<header>
	<div class="top"><img src="${logo}" alt="Sudden North"><div class="doc-label">CAPABILITY STATEMENT<span>${esc(company.legalName.toUpperCase())}</span></div></div>
	<p class="lede">${esc(company.summary)}</p>
	<div class="badge"><b>${esc(company.designation.short)}</b>${esc(company.designation.long)}</div>
</header>
<main>
	<div class="primary">
		<section><h2>Core competencies</h2><div class="comp">${company.competencies.map((c) => `<div><h3>${esc(c.title)}</h3><ul>${c.items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul></div>`).join('')}</div></section>
		<section><h2>Differentiators</h2><div class="diff">${company.differentiators.map((d) => `<div><h3>${esc(d.title)}</h3><p>${esc(d.text)}</p></div>`).join('')}</div></section>
		<section><h2>How we team</h2><ul class="roles">${company.teamingRoles.map((r) => `<li><span>${esc(r.code)}</span><div><strong>${esc(r.title)}</strong><em>${esc(r.text)}</em></div></li>`).join('')}</ul></section>
	</div>
	<aside class="aside">
		<section><h2>Company data</h2><ul class="facts">${factRows.map(([k, v]) => `<li><span>${esc(k)}</span><span>${esc(v)}</span></li>`).join('')}</ul></section>
		<section><h2>NAICS codes</h2><ul class="naics">${company.naics.map((n) => `<li><span>${esc(n.code)}</span><div>${esc(n.title)}</div></li>`).join('')}</ul></section>
		<section class="founders"><h2>Leadership</h2>${company.founders.map((f) => `<p><strong>${esc(f.name)}</strong>${esc(f.role)}. ${esc(f.bio)}</p>`).join('')}</section>
	</aside>
</main>
<footer><span><b>$</b> ${esc(company.email)} · ${esc(company.website)}</span><span>UPDATED ${esc(company.updated.toUpperCase())}</span></footer>
</body></html>`;

const { chromium } = await loadPlaywright();
const browser = await chromium.launch();
const page = await browser.newPage();
await page.setContent(html, { waitUntil: 'load' });
const overflow = await page.evaluate(() => document.body.scrollHeight > 11 * 96 + 2);
if (overflow) {
	const height = await page.evaluate(() => document.body.scrollHeight);
	console.warn(`⚠ Content is ${height}px tall; one Letter page is 1056px. Trim text in company.json.`);
}
await page.pdf({ path: outPdf, format: 'Letter', printBackground: true, preferCSSPageSize: true, margin: { top: 0, right: 0, bottom: 0, left: 0 } });
await browser.close();
if (process.argv.includes('--html')) writeFileSync(outPdf.replace(/\.pdf$/, '.preview.html'), html);
console.log(`Wrote ${outPdf}`);
