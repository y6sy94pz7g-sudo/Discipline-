const fs = require('fs');
const path = require('path');
const orn = require('./ornaments');
const content = require('./content_ham');

const FONT = (pkg, file) => path.join(__dirname, 'node_modules/@fontsource', pkg, 'files', file);
function b64(p) { return fs.readFileSync(p).toString('base64'); }
function face(family, file, weight, style) {
  return `@font-face{font-family:'${family}';font-style:${style};font-weight:${weight};font-display:block;`
    + `src:url(data:font/woff2;base64,${b64(file)}) format('woff2');}`;
}

const fonts = [
  face('EB Garamond', FONT('eb-garamond', 'eb-garamond-latin-400-normal.woff2'), 400, 'normal'),
  face('EB Garamond', FONT('eb-garamond', 'eb-garamond-latin-500-normal.woff2'), 500, 'normal'),
  face('EB Garamond', FONT('eb-garamond', 'eb-garamond-latin-600-normal.woff2'), 600, 'normal'),
  face('EB Garamond', FONT('eb-garamond', 'eb-garamond-latin-400-italic.woff2'), 400, 'italic'),
  face('EB Garamond', FONT('eb-garamond', 'eb-garamond-latin-600-italic.woff2'), 600, 'italic'),
  face('Cormorant', FONT('cormorant-garamond', 'cormorant-garamond-latin-500-normal.woff2'), 500, 'normal'),
  face('Cormorant', FONT('cormorant-garamond', 'cormorant-garamond-latin-600-normal.woff2'), 600, 'normal'),
  face('Cormorant', FONT('cormorant-garamond', 'cormorant-garamond-latin-600-italic.woff2'), 600, 'italic'),
  face('Amiri', FONT('amiri', 'amiri-arabic-400-normal.woff2'), 400, 'normal'),
  face('Amiri', FONT('amiri', 'amiri-arabic-700-normal.woff2'), 700, 'normal'),
  face('Scheherazade', FONT('scheherazade-new', 'scheherazade-new-arabic-400-normal.woff2'), 400, 'normal'),
].join('\n');

// ---- palette -------------------------------------------------------------
const C = {
  deep: '#0b3a2b',        // cover background deep emerald
  deep2: '#08301f',       // vignette
  emerald: '#14543f',
  green: '#1c6b4f',
  cream: '#f6f0e2',       // page background
  creamDeep: '#efe6d1',
  ink: '#20302a',         // body text
  inkSoft: '#3a4a41',
  gold: '#b0863a',
  goldSoft: '#c6a15b',
  rule: '#c9bfa5',
};
const palCover = { ringLight: '#79b096', ornMid: '#1f6f52', ornDeep: '#123f2f', gold: '#c9a24e', medallion: '#0e4636' };
const palPage = { dividerInk: C.emerald, gold: C.gold, frameInk: '#2c6b51', medallion: C.cream };

const mandala = orn.coverMandala(palCover);
const corner = orn.frameCorner(palPage);

// ---- shared CSS ----------------------------------------------------------
const baseCSS = `
${fonts}
*{margin:0;padding:0;box-sizing:border-box}
:root{--ink:${C.ink};--gold:${C.gold};--emerald:${C.emerald};}
html{-webkit-print-color-adjust:exact;print-color-adjust:exact;}
body{font-family:'EB Garamond',serif;color:${C.ink};background:${C.cream};}
i,em{font-style:italic;}
[lang=ar]{font-family:'Amiri','Scheherazade',serif;}

/* ---------- COVER ---------- */
.cover{position:relative;width:148mm;height:210mm;overflow:hidden;
  background:radial-gradient(120% 90% at 50% 38%, #10493690 0%, ${C.deep} 46%, ${C.deep2} 100%), ${C.deep};
  display:flex;flex-direction:column;align-items:center;color:#fff;}
.cover .keyline{position:absolute;inset:6mm;border:1px solid #b8924355;}
.cover .keyline2{position:absolute;inset:7.2mm;border:1px solid #7db39c33;}
.cover-inner{position:relative;z-index:2;width:100%;height:100%;
  display:flex;flex-direction:column;align-items:center;padding:14mm 10mm 12mm;}
.mandala-wrap{position:relative;width:112mm;height:112mm;margin-top:2mm;}
.mandala-wrap .mandala{position:absolute;inset:0;width:100%;height:100%;}
.cover-title{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;}
.cover-title span{font-family:'Amiri',serif;font-weight:400;color:#fff;font-size:20mm;line-height:1.25;text-align:center;
  text-shadow:0 1px 10px #00000040;letter-spacing:0;}
.cover-author{margin-top:9mm;text-align:center;}
.cover-author .ar{font-family:'Amiri',serif;font-size:8.5mm;color:#eadfc3;font-weight:400;}
.cover-author .lat{margin-top:2.5mm;font-family:'Cormorant',serif;font-size:5mm;letter-spacing:.14em;
  text-transform:uppercase;color:#bcd6c8;}
.cover-spacer{flex:1 1 auto;}
.cover-trans{text-align:center;}
.cover-trans .lbl{font-family:'Cormorant',serif;letter-spacing:.28em;text-transform:uppercase;
  font-size:3.2mm;color:#9dc2b0;}
.cover-trans .nm{margin-top:2mm;font-family:'Cormorant',serif;font-size:6.2mm;color:#f4ecd7;font-weight:600;letter-spacing:.02em;}
.cover-trans .orn{margin:4mm auto 0;width:26mm;height:6mm;}
.cover-trans .orn svg{width:100%;height:100%}

/* ---------- TITLE PAGE ---------- */
.titlepage{position:relative;width:148mm;height:210mm;background:${C.cream};
  display:flex;flex-direction:column;align-items:center;text-align:center;padding:0;}
.tp-frame{position:absolute;inset:9mm;border:1.4px solid ${C.emerald};}
.tp-frame::after{content:'';position:absolute;inset:2mm;border:.7px solid ${C.gold}80;}
.tp-corner{position:absolute;width:15mm;height:15mm;z-index:3;}
.tp-corner svg{width:100%;height:100%}
.tp-corner.tl{top:6.4mm;left:6.4mm}
.tp-corner.tr{top:6.4mm;right:6.4mm;transform:scaleX(-1)}
.tp-corner.bl{bottom:6.4mm;left:6.4mm;transform:scaleY(-1)}
.tp-corner.br{bottom:6.4mm;right:6.4mm;transform:scale(-1,-1)}
.tp-inner{position:relative;z-index:2;padding:21mm 18mm 19mm;display:flex;flex-direction:column;
  align-items:center;height:100%;}
.tp-top-orn{width:28mm;height:8mm;margin-bottom:6mm}
.tp-top-orn svg{width:100%;height:100%}
.tp-main{font-family:'Cormorant',serif;font-weight:600;color:${C.emerald};font-size:14mm;line-height:1.06;}
.tp-sub{margin-top:3.5mm;font-family:'EB Garamond',serif;font-style:italic;font-size:5.6mm;color:${C.ink};}
.tp-ar{margin-top:4mm;font-family:'Amiri',serif;font-size:11mm;color:${C.emerald};line-height:1;}
.tp-div{width:70mm;height:9mm;margin:6mm 0}
.tp-div svg{width:100%;height:100%}
.tp-desc{font-family:'EB Garamond',serif;font-size:3.9mm;line-height:1.62;color:${C.inkSoft};max-width:98mm;}
.tp-desc .lead{font-variant:small-caps;letter-spacing:.04em;}
.tp-authorblock{margin-top:auto;}
.tp-author-ar{font-family:'Amiri',serif;font-size:8mm;color:${C.emerald};line-height:1.2;}
.tp-author-lat{margin-top:2.5mm;font-family:'Cormorant',serif;font-size:4.6mm;letter-spacing:.13em;
  text-transform:uppercase;color:${C.inkSoft};}
.tp-trans{margin-top:7mm;}
.tp-trans .lbl{font-family:'Cormorant',serif;letter-spacing:.26em;text-transform:uppercase;font-size:3mm;color:${C.gold};}
.tp-trans .nm{margin-top:1.5mm;font-family:'Cormorant',serif;font-size:6mm;color:${C.emerald};font-weight:600;}

/* ---------- FRONT MATTER: AUTHOR PROFILE ---------- */
.bio{position:relative;width:148mm;height:210mm;background:${C.cream};overflow:hidden;}
.bio-inner{position:relative;z-index:2;height:100%;padding:13mm 16mm 12mm;display:flex;flex-direction:column;}
.bio .tp-top-orn{width:25mm;height:7mm;margin-bottom:3.5mm;}
.bio .tp-div{width:62mm;height:8mm;margin:3.5mm 0;}
.bio-kicker{text-align:center;font-family:'Cormorant',serif;font-variant:small-caps;
  letter-spacing:.22em;text-transform:uppercase;font-size:9.5pt;color:${C.gold};}
.bio-name-ar{text-align:center;font-family:'Amiri',serif;font-weight:400;color:${C.emerald};
  font-size:12mm;line-height:1.12;margin-top:2mm;}
.bio-name-lat{text-align:center;font-family:'Cormorant',serif;font-size:4.4mm;
  letter-spacing:.08em;color:${C.inkSoft};margin-top:1mm;}
.bio-sub{text-align:center;margin:1.5mm 0 2.5mm;font-family:'Cormorant',serif;font-variant:small-caps;
  letter-spacing:.14em;color:${C.emerald};font-size:12.5pt;font-weight:600;}
.bio-sub.first{margin-top:1mm;}
.steck{font-size:9pt;line-height:1.3;}
.steck .row{display:flex;gap:3mm;padding:1.05mm 0;border-bottom:.4pt solid ${C.rule}80;}
.steck .row:last-child{border-bottom:none;}
.steck .lbl{flex:0 0 27mm;font-family:'Cormorant',serif;font-variant:small-caps;letter-spacing:.02em;
  color:${C.emerald};font-weight:600;font-size:10pt;line-height:1.22;}
.steck .val{flex:1;color:${C.ink};}
.steck .val i{font-style:italic;}
.works{columns:2;column-gap:9mm;font-size:9.7pt;line-height:1.4;list-style:none;margin-top:1mm;}
.works li{break-inside:avoid;position:relative;padding-left:5.5mm;margin-bottom:2.2mm;}
.works li::before{content:'';position:absolute;left:.5mm;top:1.9mm;width:1.8mm;height:1.8mm;
  background:${C.gold};transform:rotate(45deg);}
.works li i{font-style:italic;color:${C.ink};}
.works li .wg{color:${C.inkSoft};font-size:.9em;}
.bio-note{margin-top:auto;text-align:center;font-family:'EB Garamond',serif;font-style:italic;
  font-size:9pt;color:${C.inkSoft};padding-top:5mm;}

/* ---------- BODY / CONTENT ----------
   The body page uses a zero @page margin; text margins are supplied by padding on
   .content. The ornamental frame lives inside the page box (inset 8mm) so that
   Chromium repeats it identically on every printed page. */
.frame{position:absolute;inset:8mm;border:1.3px solid ${C.emerald};pointer-events:none;z-index:5;}
.frame::after{content:'';position:absolute;inset:1.8mm;border:.6px solid ${C.gold}66;}
.fcorner{position:absolute;width:13mm;height:13mm;z-index:6;pointer-events:none;}
.fcorner svg{width:100%;height:100%}
.fcorner.tl{top:5.4mm;left:5.4mm}
.fcorner.tr{top:5.4mm;right:5.4mm;transform:scaleX(-1)}
.fcorner.bl{bottom:5.4mm;left:5.4mm;transform:scaleY(-1)}
.fcorner.br{bottom:5.4mm;right:5.4mm;transform:scale(-1,-1)}
@media print{.frame,.fcorner{position:fixed}}

.chapter{font-size:11pt;line-height:1.62;text-align:justify;hyphens:auto;orphans:2;widows:2;}
.ayah,.hadith,.pull{break-inside:avoid;page-break-inside:avoid;}
.speaker,.chapter-head,.bismillah,.notes-title{break-after:avoid;page-break-after:avoid;}
.ayah,.hadith,.pull{break-before:avoid;}
.chapter-head{text-align:center;margin:2mm 0 6mm;}
.kicker{font-family:'Cormorant',serif;font-variant:small-caps;letter-spacing:.22em;
  text-transform:uppercase;font-size:9pt;color:${C.gold};}
.chapter-title{font-family:'Cormorant',serif;font-weight:600;color:${C.emerald};
  font-size:26pt;line-height:1.12;margin-top:4mm;}
.chapter-title .ct-ar{font-family:'Amiri',serif;font-weight:400;font-size:22pt;display:inline-block;margin:1mm 0;}
.chapter-title .ct-ar.big{font-size:30pt;line-height:1.2;}
.shead{text-align:center;margin:6.5mm 0 4mm;break-after:avoid;page-break-after:avoid;}
.shead svg{width:6mm;height:6mm;display:block;margin:0 auto 1.6mm;}
.shead span{font-family:'Cormorant',serif;font-variant:small-caps;letter-spacing:.08em;
  color:${C.emerald};font-size:13.5pt;font-weight:600;}
.ayah.plain .ayah-de{font-family:'EB Garamond',serif;font-style:italic;font-size:11.5pt;
  line-height:1.55;color:#f6efdd;}
.poem{margin:4mm 6mm;text-align:center;break-inside:avoid;page-break-inside:avoid;}
.poem span{font-family:'EB Garamond',serif;font-style:italic;font-size:11pt;line-height:1.7;color:${C.emerald};}
.chapter-title .ct-translit{font-family:'EB Garamond',serif;font-style:italic;font-weight:400;
  font-size:13pt;color:${C.inkSoft};letter-spacing:.02em;}
.chapter-head .divider{width:66mm;height:9mm;margin:4mm auto 0;display:block;}

.bismillah{font-family:'Amiri',serif;font-size:19pt;text-align:center;color:${C.emerald};
  margin:2mm 0 7mm;line-height:1;}

.chapter p{margin:0 0 3.2mm;text-indent:5mm;}
.chapter p.opening,.chapter p.speaker{text-indent:0;}
.dropcap{float:left;font-family:'Cormorant',serif;font-weight:600;color:${C.emerald};
  font-size:34pt;line-height:.82;padding:1mm 2mm 0 0;}
.speaker{font-family:'Cormorant',serif;font-variant:small-caps;letter-spacing:.06em;
  font-size:12.5pt;color:${C.emerald};font-weight:600;margin:5mm 0 3mm;text-align:left;}

/* verse box */
.ayah{margin:4.5mm 3mm;padding:4mm 6mm 3.6mm;position:relative;text-align:center;
  background:linear-gradient(180deg,#12513c,${C.emerald});color:#f4ecd7;border-radius:1.5mm;
  box-shadow:inset 0 0 0 .5mm #c9a24e55;}
.ayah::before,.ayah::after{content:'';position:absolute;left:3mm;right:3mm;height:.4mm;background:#c9a24e66;}
.ayah::before{top:2mm}.ayah::after{bottom:2mm}
.ayah-ar{font-family:'Amiri',serif;font-size:17pt;line-height:1.9;color:#fff;direction:rtl;}
.ayah-de{font-family:'EB Garamond',serif;font-style:italic;font-size:10.5pt;line-height:1.5;
  margin-top:2mm;color:#eadfc3;text-indent:0;}
.ayah-ref{display:flex;align-items:center;justify-content:center;gap:2mm;margin-top:2.4mm;
  font-family:'Cormorant',serif;font-variant:small-caps;letter-spacing:.12em;font-size:9pt;color:#d8b978;}
.ayah-ref .mini{width:4.5mm;height:4.5mm}

/* hadith / narration box */
.hadith{margin:4mm 6mm;padding:3mm 5mm;border-left:1mm solid ${C.gold};
  background:${C.creamDeep};border-radius:0 1.5mm 1.5mm 0;text-align:left;}
.hadith-de{font-family:'EB Garamond',serif;font-size:10.5pt;line-height:1.55;color:${C.ink};text-indent:0;}
.hadith-ref{margin-top:2mm;font-family:'Cormorant',serif;font-variant:small-caps;letter-spacing:.05em;
  font-size:10.5pt;color:${C.emerald};font-weight:600;}

/* pull quote (statements of the theologians) */
.pull{margin:4mm 9mm;text-align:center;position:relative;}
.pull span{font-family:'EB Garamond',serif;font-style:italic;font-size:11pt;line-height:1.55;
  color:${C.inkSoft};text-indent:0;}
.pull.long span{font-size:10.5pt;line-height:1.6;}

.fnref{font-family:'EB Garamond',serif;font-size:.62em;color:${C.gold};font-weight:600;
  vertical-align:super;line-height:0;padding-left:.3mm;}

/* inline Qur'an quotation (braces) woven into running text */
.qv{color:${C.emerald};font-weight:500;}
.qvref{font-family:'Cormorant',serif;font-variant:small-caps;letter-spacing:.03em;
  font-size:.82em;color:${C.gold};white-space:nowrap;}

.endflourish{text-align:center;margin:7mm 0 3mm;}
.endflourish svg{width:9mm;height:9mm}

.notes-rule{border:none;height:.4mm;background:linear-gradient(90deg,transparent,${C.rule},transparent);
  margin:5mm 0 4mm;}
.notes{page-break-inside:auto;}
.notes-title{font-family:'Cormorant',serif;font-variant:small-caps;letter-spacing:.14em;
  color:${C.emerald};font-size:13pt;text-align:center;margin-bottom:4mm;font-weight:600;}
.notes-list{list-style:none;counter-reset:n;font-size:9pt;line-height:1.5;color:${C.inkSoft};}
.notes-list li{counter-increment:n;position:relative;padding-left:8mm;margin-bottom:2.4mm;text-align:justify;}
.notes-list li::before{content:counter(n);position:absolute;left:0;top:-.2mm;
  font-family:'Cormorant',serif;font-weight:600;color:${C.gold};font-size:11pt;
  width:6mm;text-align:right;}
`;

// ---- page HTML fragments -------------------------------------------------
const coverHTML = `
<div class="cover">
  <div class="keyline"></div><div class="keyline2"></div>
  <div class="cover-inner">
    <div class="mandala-wrap">
      ${mandala}
      <div class="cover-title"><span lang="ar" dir="rtl">الفَتْوَى<br>الحَمَوِيَّة</span></div>
    </div>
    <div class="cover-author">
      <div class="ar" lang="ar" dir="rtl">شَيْخُ الإِسْلَام ابْنُ تَيْمِيَّة</div>
      <div class="lat">Shaykhu&#x2011;l&#x2011;Islām Ibn Taymiyyah</div>
    </div>
    <div class="cover-spacer"></div>
    <div class="cover-trans">
      <div class="lbl">Überprüft von</div>
      <div class="nm">Abū Muḥammad as&#x2011;Sanzakī</div>
      <div class="orn">${orn.miniRosette(palCover, '#c9a24e')}</div>
    </div>
  </div>
</div>`;

const titleHTML = `
<div class="titlepage">
  <div class="tp-frame"></div>
  <div class="tp-corner tl">${corner}</div><div class="tp-corner tr">${corner}</div>
  <div class="tp-corner bl">${corner}</div><div class="tp-corner br">${corner}</div>
  <div class="tp-inner">
    <div class="tp-top-orn">${orn.chapterDivider(palPage)}</div>
    <div class="tp-main">al&#x2011;Fatwā<br>al&#x2011;Ḥamawiyyah</div>
    <div class="tp-sub">Über Allāhs Namen, Eigenschaften und Erhabenheit</div>
    <div class="tp-ar" lang="ar" dir="rtl">الفَتْوَى الحَمَوِيَّة</div>
    <div class="tp-div">${orn.chapterDivider(palPage)}</div>
    <div class="tp-desc"><span class="lead">Der Beweis aus Qurʾān, Sunna und den Aussagen der
      Salaf für die Erhabenheit Allāhs über Seine Schöpfung</span> &#8211; aus dem klassischen Werk
      des Shaykhu&#x2011;l&#x2011;Islām Ibn Taymiyyah zur Bestätigung der Namen und Eigenschaften Allāhs.</div>
    <div class="tp-authorblock">
      <div class="tp-author-ar" lang="ar" dir="rtl">شيخ الإسلام ابن تيمية</div>
      <div class="tp-author-lat">Shaykhu&#x2011;l&#x2011;Islām Aḥmad ibn Taymiyyah</div>
      <div class="tp-trans">
        <div class="lbl">Überprüft von</div>
        <div class="nm">Abū Muḥammad as&#x2011;Sanzakī</div>
      </div>
    </div>
  </div>
</div>`;

const bioCorners = `
  <div class="tp-corner tl">${corner}</div><div class="tp-corner tr">${corner}</div>
  <div class="tp-corner bl">${corner}</div><div class="tp-corner br">${corner}</div>`;

const steckRows = [
  ['Voller Name', 'Taqiyy ad&#x2011;Dīn Abū l&#x2011;ʿAbbās Aḥmad ibn ʿAbd al&#x2011;Ḥalīm ibn ʿAbd as&#x2011;Salām ibn Taymiyyah al&#x2011;Ḥarrānī'],
  ['Beiname', 'Shaykhu&#x2011;l&#x2011;Islām („Meister des Islam“)'],
  ['Geboren', '10. Rabīʿ al&#x2011;Awwal 661 n.&#8239;H. (22. Januar 1263) in Ḥarrān'],
  ['Gestorben', '20. Dhū l&#x2011;Qaʿda 728 n.&#8239;H. (26. September 1328) in der Zitadelle von Damaskus'],
  ['Rechtsschule', 'ḥanbalitisch &#8211; zugleich eigenständiger <i>Mudschtahid</i>'],
  ['Herkunft', 'angesehene Gelehrtenfamilie; Flucht vor den Mongolen nach Damaskus (667 n.&#8239;H.)'],
  ['Wissensgebiete', 'Qurʾān, Tafsīr, Ḥadīth, Fiqh, Uṣūl, arabische Sprache, Kalām und Philosophie'],
  ['Wirken', 'Lehrer und Muftī bereits in jungen Jahren; Verteidiger der ʿaqīda der Ahl as&#x2011;Sunna'],
  ['Dschihād', 'Aufruf und Teilnahme am Kampf gegen die Mongolen (Schlacht von Schaqḥab, 702 n.&#8239;H.)'],
  ['Prüfungen', 'mehrfach inhaftiert in Kairo, Alexandria und Damaskus; verstarb in Gefangenschaft'],
  ['Schüler', 'Ibn al&#x2011;Qayyim, adh&#x2011;Dhahabī, Ibn Kathīr, Ibn ʿAbd al&#x2011;Hādī u.&#8239;a.'],
].map(([l, v]) => `<div class="row"><span class="lbl">${l}</span><span class="val">${v}</span></div>`).join('');

const works = [
  ['Madschmūʿ al&#x2011;Fatāwā', 'umfangreiche Fatwa-Sammlung'],
  ['Minhādsch as&#x2011;Sunna an&#x2011;Nabawiyya', ''],
  ['Darʾ Taʿāruḍ al&#x2011;ʿAql wa&#x2011;n&#x2011;Naql', ''],
  ['al&#x2011;ʿAqīda al&#x2011;Wāsiṭiyya', ''],
  ['al&#x2011;Fatwā al&#x2011;Ḥamawiyya al&#x2011;Kubrā', ''],
  ['al&#x2011;ʿAqīda at&#x2011;Tadmuriyya', ''],
  ['Iqtiḍāʾ aṣ&#x2011;Ṣirāṭ al&#x2011;Mustaqīm', ''],
  ['aṣ&#x2011;Ṣārim al&#x2011;Maslūl ʿalā Schātim ar&#x2011;Rasūl', ''],
  ['Kitāb al&#x2011;Īmān', ''],
  ['ar&#x2011;Radd ʿalā al&#x2011;Manṭiqiyyīn', ''],
  ['al&#x2011;Dschawāb aṣ&#x2011;Ṣaḥīḥ li&#x2011;man Baddala Dīn al&#x2011;Masīḥ', ''],
  ['al&#x2011;ʿUbūdiyya', ''],
  ['Qāʿida Dschalīla fī t&#x2011;Tawassul wa&#x2011;l&#x2011;Wasīla', ''],
  ['as&#x2011;Siyāsa asch&#x2011;Scharʿiyya', ''],
  ['al&#x2011;Kalim aṭ&#x2011;Ṭayyib', ''],
].map(([t, g]) => `<li><i>${t}</i>${g ? ` <span class="wg">&#8211; ${g}</span>` : ''}</li>`).join('');

const bioHTML = `
<div class="bio">
  <div class="tp-frame"></div>${bioCorners}
  <div class="bio-inner">
    <div class="tp-top-orn">${orn.chapterDivider(palPage)}</div>
    <div class="bio-kicker">Einleitung &#183; Über den Verfasser</div>
    <div class="bio-name-ar" lang="ar" dir="rtl">شيخ الإسلام ابن تيمية</div>
    <div class="bio-name-lat">Taqiyy ad&#x2011;Dīn Aḥmad ibn Taymiyyah</div>
    <div class="tp-div">${orn.chapterDivider(palPage)}</div>
    <div class="bio-sub first">Steckbrief</div>
    <div class="steck">${steckRows}</div>
  </div>
</div>
<div class="bio">
  <div class="tp-frame"></div>${bioCorners}
  <div class="bio-inner">
    <div class="tp-top-orn">${orn.chapterDivider(palPage)}</div>
    <div class="bio-sub first">Seine Werke <span style="text-transform:none;font-variant:normal;font-size:.8em;">(Auswahl)</span></div>
    <ul class="works">${works}</ul>
    <div class="bio-note">Nur eine kleine Auswahl aus mehreren Hundert Werken, Abhandlungen und Fatwas.</div>
  </div>
</div>`;

const frameHTML = `
<div class="frame"></div>
<div class="fcorner tl">${corner}</div><div class="fcorner tr">${corner}</div>
<div class="fcorner bl">${corner}</div><div class="fcorner br">${corner}</div>`;

const bodyHTML = content(orn, palPage);

// ---- documents -----------------------------------------------------------
function doc(title, css, inner) {
  return `<!doctype html><html lang="de"><head><meta charset="utf-8">
<title>${title}</title><style>${baseCSS}\n${css}</style></head><body>${inner}</body></html>`;
}

const coverDoc = doc('Muqaddimah — Umschlag',
  `@page{size:148mm 210mm;margin:0}body{background:${C.deep}}
   .titlepage,.bio{page-break-before:always;}`,
  coverHTML + titleHTML + bioHTML);

// Body text uses real per-page @page margins so every page keeps its top/bottom
// text margin. The ornamental frame + page numbers are drawn afterwards onto each
// page by render.js (pdf-lib), which guarantees identical placement on every page.
const bodyDoc = doc('Muqaddimah',
  `@page{size:148mm 210mm;margin:18mm 18mm 20mm 18mm}
   html,body{background:${C.cream}}`,
  `<main class="content">${bodyHTML}</main>`);

// combined self-contained viewer (screen + print)
const combinedDoc = doc('al-Fatwā al-Ḥamawiyyah',
  `@page{size:148mm 210mm;margin:0}
   @media screen{body{background:#26463a;padding:8mm 0}
     .sheet{width:148mm;margin:0 auto 7mm;box-shadow:0 6px 30px #0006;position:relative;overflow:hidden;background:${C.cream}}
     .sheet.body{min-height:210mm;padding:20mm 17mm 18mm}}
   .cover,.titlepage{page-break-after:always}
   @media print{
     .sheet{width:148mm}
     .sheet.body{padding:0}
     .cover,.titlepage{margin:0}
     .body-sheet-frame{}
   }`,
  `<div class="sheet cover-sheet">${coverHTML}</div>
   <div class="sheet title-sheet">${titleHTML}</div>
   <div class="sheet">${bioHTML}</div>
   <div class="sheet body">${frameHTML}<main class="content">${bodyHTML}</main></div>`);

const OUT = __dirname;
fs.writeFileSync(path.join(OUT, 'cover_h.html'), coverDoc);
fs.writeFileSync(path.join(OUT, 'body_h.html'), bodyDoc);
fs.writeFileSync(path.join(OUT, 'Hamawiyyah.html'), combinedDoc);
console.log('Wrote cover_h.html, body_h.html, Hamawiyyah.html');
