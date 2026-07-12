const { chromium } = require('playwright-core');
const { PDFDocument, StandardFonts, rgb, degrees } = require('pdf-lib');
const fs = require('fs');
const path = require('path');

const DIR = __dirname;
const CHROME = '/opt/pw-browsers/chromium-1194/chrome-linux/chrome';
const MM = 72 / 25.4; // pt per mm
const GREEN = rgb(0.078, 0.329, 0.247);
const GOLD = rgb(0.69, 0.525, 0.227);

// Draw the ornamental frame (double rule + corner flourishes) onto one page.
function drawFrame(p) {
  const W = p.getWidth(), H = p.getHeight();
  const o = 8 * MM, g = 10 * MM;      // outer / inner rule insets
  // outer green rule
  p.drawRectangle({ x: o, y: o, width: W - 2 * o, height: H - 2 * o,
    borderColor: GREEN, borderWidth: 1.3 });
  // inner gold rule
  p.drawRectangle({ x: g, y: g, width: W - 2 * g, height: H - 2 * g,
    borderColor: GOLD, borderWidth: 0.6, opacity: 0, borderOpacity: 0.65 });
  // corner flourishes: quarter arc + gold dot, one per corner
  const r = 7;
  const arc = `M 0 ${r} C 0 ${r * 0.45} ${r * 0.45} 0 ${r} 0`;
  const corners = [
    { x: g, y: H - g, rot: 0 },          // top-left
    { x: W - g, y: H - g, rot: -90 },    // top-right
    { x: W - g, y: g, rot: 180 },        // bottom-right
    { x: g, y: g, rot: 90 },             // bottom-left
  ];
  for (const c of corners) {
    p.drawSvgPath(arc, { x: c.x, y: c.y, scale: MM, rotate: degrees(c.rot),
      borderColor: GREEN, borderWidth: 1.1 });
    // gold dot near the corner apex (offset toward the interior)
    const dx = (c.rot === 0 || c.rot === 90) ? 2.4 : -2.4;
    const dy = (c.rot === 0 || c.rot === -90) ? -2.4 : 2.4;
    p.drawCircle({ x: c.x + dx * MM, y: c.y + dy * MM, size: 1.15 * MM,
      color: GOLD, borderWidth: 0 });
  }
}

async function renderPDF(browser, htmlPath, outPath) {
  const page = await browser.newPage();
  await page.goto('file://' + htmlPath, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.pdf({ path: outPath, preferCSSPageSize: true, printBackground: true });
  await page.close();
}

(async () => {
  const browser = await chromium.launch({ executablePath: CHROME });
  await renderPDF(browser, path.join(DIR, 'cover.html'), path.join(DIR, 'cover.pdf'));
  await renderPDF(browser, path.join(DIR, 'body.html'), path.join(DIR, 'body.pdf'));
  await browser.close();

  // merge cover (2 pp) + body
  const out = await PDFDocument.create();
  for (const f of ['cover.pdf', 'body.pdf']) {
    const src = await PDFDocument.load(fs.readFileSync(path.join(DIR, f)));
    const pages = await out.copyPages(src, src.getPageIndices());
    pages.forEach(p => out.addPage(p));
  }

  // draw ornamental frame + discreet page numbers on the body pages (all but first two)
  const font = await out.embedFont(StandardFonts.TimesRoman);
  const pages = out.getPages();
  for (let i = 2; i < pages.length; i++) {
    const p = pages[i];
    drawFrame(p);
    const n = i - 1; // first body page = 1
    const label = `—  ${n}  —`;
    const size = 9.5;
    const w = font.widthOfTextAtSize(label, size);
    p.drawText(label, {
      x: (p.getWidth() - w) / 2, y: 12 * MM, size, font, color: GREEN,
      characterSpacing: 0.6,
    });
  }

  out.setTitle('Muqaddimah — Einführung in al-Fatwā al-Ḥamawiyyah');
  out.setAuthor('Shaykhu-l-Islām Ibn Taymiyyah');
  out.setSubject('Übersetzt von Abū Muḥammad as-Sanzakī');
  out.setCreator('Abū Muḥammad as-Sanzakī');
  const bytes = await out.save();
  fs.writeFileSync(path.join(DIR, 'Muqaddimah.pdf'), bytes);
  console.log('Wrote Muqaddimah.pdf —', out.getPageCount(), 'pages');
})().catch(e => { console.error(e); process.exit(1); });
