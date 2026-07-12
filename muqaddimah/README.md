# Muqaddimah — Einführung in al-Fatwā al-Ḥamawiyyah

Deutsche Übersetzung und Buchgestaltung der Einführung (*al-Muqaddimah*) zu
**al-Fatwā al-Ḥamawiyyah** von Shaykhu‑l‑Islām Ibn Taymiyyah – einem klassischen
Werk zur Klärung des rechtgläubigen islamischen Bekenntnisses bezüglich der Namen
und Eigenschaften Allāhs.

**Übersetzt von Abū Muḥammad as‑Sanzakī.**

## Fertige Dateien

| Datei | Beschreibung |
|-------|--------------|
| `Muqaddimah.pdf` | Das fertige Buch (A5, druckfertig, Schriften eingebettet). |
| `Muqaddimah.html` | Vollständig eigenständige HTML‑Fassung zum Ansehen im Browser (alle Schriften und Ornamente eingebettet, keine externen Abhängigkeiten). |

## Gestaltung

- Dunkles Smaragdgrün mit verschiedenen Grüntönen, Weiß, dezentem Gold und Beige.
- Umschlag mit kreisförmigem, geometrischem islamischem Ornament (Mandala) und dem
  arabischen Titel **المقدمة** in weißer Kalligraphie.
- Jede Seite mit dezenten Ornamenträndern und Eckverzierungen.
- Ornamentale Kapitelüberschrift, hervorgehobene Qurʾānverse (grüne Kästen mit
  Goldrand, arabischer Text + deutsche Bedeutung) und Hadithe (beige Kästen).
- Dezente Seitenzahlen im unteren Bereich; Quellennachweise als Anmerkungen.
- Keine Abbildungen von Lebewesen, keine Moscheesilhouetten, keine Schwerter.

Schriften: *EB Garamond* und *Cormorant* (Fließtext/Überschriften),
*Amiri* (arabische Kalligraphie) – alle unter der SIL Open Font License.

## Neu erzeugen

```bash
cd src
npm install          # lädt Schriften (@fontsource) + pdf-lib + playwright-core
node build.js        # erzeugt cover.html, body.html, Muqaddimah.html
node render.js       # rendert via Chromium und erzeugt Muqaddimah.pdf
```

`render.js` erwartet eine Chromium‑Installation (Pfad ggf. in `render.js`
anpassen). Die Buchgestaltung ist vollständig in `build.js` (Layout/CSS),
`ornaments.js` (SVG‑Ornamente) und `content.js` (deutscher Text) definiert.
