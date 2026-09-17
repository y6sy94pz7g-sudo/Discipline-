# 📚 Projekt-Übergabe: Deutsche Ibn-Taymiyyah-Bücher

**Stand:** 17. September 2026 · **Repository:** `y6sy94pz7g-sudo/Discipline-` · **Branch:** `claude/german-islamic-book-design-4altjz`

Dieses Archiv enthält **alles**, um an einem neuen Account / in einer neuen Claude-Code-Sitzung
genau dort weiterzumachen, wo wir aufgehört haben.

---

## 1. Was ist das Projekt?

Zwei deutschsprachige, buchgestaltete Ausgaben aus **al-Fatwā al-Ḥamawiyyah** von
Shaykhu-l-Islām Ibn Taymiyyah, jeweils als druckfertiges A5-PDF im gleichen ornamentalen
Smaragd-Design. **Überprüft von Abū Muḥammad as-Sanzakī.**

| # | Buch | Inhalt | Seiten | Datei |
|---|------|--------|--------|-------|
| 1 | **Muqaddimah** (المقدمة) | Die Einleitung von al-Fatwā al-Ḥamawiyyah (aus dem Englischen übersetzt) + Autoren-Steckbrief + Werkeliste | 18 | `01-Muqaddimah/Muqaddimah.pdf` |
| 2 | **al-Fatwā al-Ḥamawiyyah** (الفتوى الحموية) | Der Haupttext zur Erhabenheit (ʿuluww) Allāhs (aus dem Arabischen übersetzt, S. 21–30) | 18 | `02-al-Fatwa-al-Hamawiyyah/Hamawiyyah.pdf` |

Beide sind **final** und enthalten alle Korrekturen aus deinen Audio- und PDF-Reviews.

---

## 2. Inhalt dieses Archivs

```
Discipline-German-Books-Archive/
├── README-START-HERE.md / .pdf     ← diese Anleitung
├── CHAT-SESSION-LOG.md             ← chronologische Zusammenfassung der ganzen Arbeit
├── GIT-INFO.txt                    ← Branch, Remote, Commit-Historie
├── 01-Muqaddimah/
│   ├── Muqaddimah.pdf              ← FERTIG (neueste Version)
│   ├── Muqaddimah.html             ← im Browser öffnen
│   ├── README.md
│   └── src/  build.js · content.js · render.js · ornaments.js · package.json
├── 02-al-Fatwa-al-Hamawiyyah/
│   ├── Hamawiyyah.pdf              ← FERTIG (neueste Version)
│   ├── Hamawiyyah.html
│   ├── README.md
│   └── src/  build_ham.js · content_ham.js · render_ham.js · ornaments.js · package.json
└── source-materials/
    └── audio-transcript-hamawiyyah.txt   ← Transkript deiner letzten Sprachnachricht
```

> **Wichtig:** Die *Quelldateien* der Übersetzung stehen in `content.js` (Muqaddimah)
> und `content_ham.js` (Hamawiyyah). Dort änderst du Text. `build*.js` = Layout/CSS,
> `ornaments.js` = SVG-Ornamente, `render*.js` = PDF-Erzeugung.

---

## 3. So machst du weiter (neue Claude-Code-Sitzung)

### Schritt 1 – Repo holen
Der ganze Code ist bereits im GitHub-Repo committet. In einer neuen Sitzung:
```bash
git clone <repo-url>
cd Discipline-
git checkout claude/german-islamic-book-design-4altjz   # oder von main neu abzweigen
```
Falls du auf dem neuen Account keinen Zugriff auf das alte Repo hast: entpacke einfach
dieses Archiv – die `src/`-Ordner enthalten den vollständigen, lauffähigen Code.

### Schritt 2 – Ein Buch neu bauen
```bash
cd 01-Muqaddimah/src      # oder 02-al-Fatwa-al-Hamawiyyah/src
npm install               # installiert puppeteer + pdf-lib (siehe package.json)
node build.js             # erzeugt cover.html, body.html, Muqaddimah.html
node render.js            # rendert via Chromium -> Muqaddimah.pdf
```
Für Buch 2 heißen die Skripte `build_ham.js` und `render_ham.js` und erzeugen `Hamawiyyah.pdf`.

### Wichtig zur Chromium-/Browser-Umgebung (Claude Code Web)
- Chromium ist vorinstalliert. Setze bei Bedarf:
  `PLAYWRIGHT_BROWSERS_PATH=/opt/pw-browsers` und `PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1`.
- **Nicht** `playwright install` ausführen.
- `render*.js` nutzt puppeteer; falls es den Browser nicht findet, in `render*.js`
  `executablePath` auf den vorinstallierten Chromium setzen.

---

## 4. Design-System (damit alles gleich bleibt)

| Element | Wert |
|---------|------|
| Format | A5 (148 × 210 mm) |
| Farben | Tiefes Smaragd `#0f4c3a`-Bereich, Creme-Papier, Gold-Akzente |
| Schriften | **EB Garamond** (Fließtext), **Cormorant** (Titel/Kapitälchen), **Amiri** (Arabisch) |
| Cover | Arabischer Titel in weißer Kalligraphie in einem Mandala-Ornament |
| Rahmen | Grüner Doppelrahmen mit Eck-Ornamenten auf jeder Textseite |
| Koranverse | Grüne Kästen mit arabischem Vers + deutscher Übersetzung + Quellenangabe; kurze Verse inline mit `{ … }` + `[Sure x:y]` |
| Hadithe | Beige Kästen mit deutschem Text + Quellenangabe |
| Gedichte | zentriert, kursiv, smaragdfarben |
| Fußnoten/Anmerkungen | Muqaddimah: nummerierte Endnoten; Hamawiyyah: Quellen inline |
| Autor-Kredit | „**Überprüft von** Abū Muḥammad as-Sanzakī“ (NICHT „Übersetzt von“) |

---

## 5. Übersetzungs- & Terminologie-Konventionen (abgestimmt)

- **Überprüft von** (nicht „Übersetzt von“) – auf Cover und Titelseite.
- Titel Buch 1: „Muqaddimah“ + Untertitel „Einleitung von al-Fatwā al-Ḥamawiyyah“.
- Kapitelüberschrift: „Einleitung“ (nicht „Einführung“).
- *naṣṣ* → „**eindeutiger Wortlaut**“; *ẓāhir* → „offenkundige Bedeutung“.
- *Muhādschirūn / Anṣār* → auf S. 1 der Muqaddimah als „**Auswanderer und Helfer**“
  (an anderer Stelle bewusst als Transliteration belassen – so gewünscht).
- *al-mutakallifūn* → „**Scholastiker**“ bzw. „sich unnötig Bemühende“.
- *ṭāghūt / ṭawāghīt* → „**falsche Richter**“ (ṭawāghīt) im Schiedsspruch-Kontext, sonst „Götzen“.
- *ummah* → „Gemeinschaft (Ummah)“.
- *risāla* → an einer Stelle „Botschaft“ (nicht „Gesandtschaft“).
- *maqāyīs* → „Analogien“ (nicht „Maßstäbe“).
- Autor-Einschübe innerhalb fiktiver Rede werden **dezent hervorgehoben** (CSS-Klasse `.aside`).
- Koranverse als eigene Sätze → grüner Kasten; in Sätze eingewoben → `{ … }` + `[Sure]`.

---

## 6. Korrektur-Historie (was in welchem Review geändert wurde)

**Muqaddimah – Audio-Review 1 + markierte PDF:** ~32 Wortkorrekturen (u. a. „auf das
Höllenfeuer“, „Was sagen die Gelehrten“, „höchste Erkenntnis“, „edelste Ziel“, „gerieten
in Irrtum“, „Küken der Philosophen“, „Zoroastrier“, „verstarb“→„starb“, „Torheit“→
„Dummheit“, „unterrichtete“→„berichtete“, „der Logiker“→„der Weltenbewohner“); Koranverse
im Fließtext mit `{ }` + Referenz markiert (Ibrāhīm 14:1, al-Aḥzāb 33:46, al-Baqara 2:213).

**Muqaddimah – Nachtrag:** „Überprüft von“ statt „Übersetzt von“; Titel „Einleitung von …“;
zwei Vorspann-Seiten hinzugefügt (Steckbrief Ibn Taymiyyah + Werkeliste).

**Hamawiyyah – Audio-Review 2 + markierte PDF:** 18 Korrekturen (siehe Abschnitt 5;
u. a. „dauernd“, „klarstellen“, „eindeutiger Wortlaut“, „(Ummah)“, „Scholastiker“,
„Meinungsunterschied“, „sah ich … und sie ist“, „[zu ihm kehrt man nicht zurück]“,
„falsche Richter“, „Spitzfindige / Geschickte“, „Botschaft“, „Analogien“, Autor-Einschub
markiert, Gedicht „groß und erhaben“). Alle im letzten Commit enthalten.

---

## 7. Ideen zum Weiterausbauen

- **Mehr von al-Ḥamawiyyah übersetzen:** Der arabische Originaltext geht über S. 30 hinaus
  (Aussagen der Salaf usw.). Neue Seiten einfach in `content_ham.js` ergänzen – Layout,
  Vers-/Hadith-Kästen und Ornamente sind wiederverwendbar.
- **Beide Bücher zu einem Band zusammenführen** (Muqaddimah + Hauptteil als ein PDF).
- **Endnoten/Takhrīj** für die Hadithe der Hamawiyyah ergänzen (wie in der Muqaddimah).
- **Register / Inhaltsverzeichnis** einfügen.
- **Print-Version** mit Beschnittzugabe und Bundsteg für den Druck.

### So bittest du die neue Claude-Code-Sitzung um Fortsetzung (Beispiel-Prompt)
> „Hier ist mein Archiv `Discipline-German-Books-Archive`. Lies `README-START-HERE.md`.
> Ich möchte al-Fatwā al-Ḥamawiyyah ab Seite 31 des arabischen Originals weiterübersetzen,
> im exakt gleichen Layout. Verwende `02-al-Fatwa-al-Hamawiyyah/src/` als Basis. Halte dich
> an die Terminologie-Konventionen aus Abschnitt 5.“

---

## 8. Git-Commit-Attribution (für neue Commits verwenden)

```
Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_014osmPRd8W5MPixxGvuaY2G
```

---

*Erstellt für den Account-Wechsel. Nichts Wichtiges wurde ausgelassen; die neuesten PDFs
beider Bücher liegen bei.*
