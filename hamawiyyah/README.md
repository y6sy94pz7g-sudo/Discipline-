# al-Fatwā al-Ḥamawiyyah — deutsche Ausgabe

Deutsche Übersetzung und Buchgestaltung eines Abschnitts aus **al-Fatwā al-Ḥamawiyyah**
von Shaykhu‑l‑Islām Ibn Taymiyyah – der Beweis aus Qurʾān, Sunna und den Aussagen der
Salaf für die Erhabenheit (ʿuluww) Allāhs über Seine Schöpfung.

**Überprüft von Abū Muḥammad as‑Sanzakī.**

Eigenständiger Band im selben Layout und Stil wie die *Muqaddimah* (siehe Ordner
`../muqaddimah`).

## Fertige Dateien

| Datei | Beschreibung |
|-------|--------------|
| `Hamawiyyah.pdf` | Das fertige Buch (A5, druckfertig, Schriften eingebettet). |
| `Hamawiyyah.html` | Vollständig eigenständige HTML‑Fassung für den Browser. |

## Inhalt

Übersetzt aus dem arabischen Originaltext (S. 21–30): die Bestätigung, dass Allāh über
Seiner Schöpfung und über dem Thron ist, belegt durch zahlreiche Qurʾānverse
(hervorgehobene Kästen mit Quellenangabe), Hadithe und die Verse ʿAbdullāh ibn Rawāḥas
und Umayya ibn Abī aṣ‑Ṣalts, gefolgt von der Widerlegung der Position der
spekulativen Theologen (mutakallimūn).

## Neu erzeugen

```bash
cd src
npm install
node build_ham.js    # erzeugt cover_h.html, body_h.html, Hamawiyyah.html
node render_ham.js   # rendert via Chromium und erzeugt Hamawiyyah.pdf
```

Gestaltung: `build_ham.js` (Layout/CSS), `ornaments.js` (SVG‑Ornamente),
`content_ham.js` (deutscher Text). Schriften: *EB Garamond*, *Cormorant*, *Amiri*.
