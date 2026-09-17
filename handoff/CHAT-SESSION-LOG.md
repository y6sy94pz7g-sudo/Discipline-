# Chat-Session-Log — Deutsche Ibn-Taymiyyah-Bücher

Chronologische Zusammenfassung der gesamten Arbeit (mehrere Sitzungen), damit eine neue
Claude-Code-Sitzung den vollständigen Kontext hat.

## Phase 0 — Vorgeschichte
- Im Repo existiert bereits eine deutsche Übersetzung einer bosnischen Abhandlung über
  Hochmut (al-Kibr) — Commit `9c6497c`. (Separates Werk, nicht Teil dieser zwei Bücher.)

## Phase 1 — Muqaddimah erstellt
- Ausgangsmaterial: englisches PDF der Einleitung (Muqaddimah) von al-Fatwā al-Ḥamawiyyah.
- Aufgabe: ins Deutsche übersetzen und als schön gestaltetes islamisches Buch (PDF) setzen.
- Ergebnis: Toolchain aufgebaut in `src/` — `ornaments.js` (SVG-Mandala, Ecken, Rosetten,
  Teiler), `build.js` (HTML+CSS, A5, Smaragd/Creme/Gold, EB Garamond/Cormorant/Amiri),
  `content.js` (Übersetzung), `render.js` (puppeteer → PDF, pdf-lib für Rahmen +
  Seitenzahlen). Cover: المقدمة in Mandala. Commit `947fa8b`.

## Phase 2 — Muqaddimah: Korrekturen (Audio 11:30 min + markierte PDF)
- Nutzer schickte Sprachnachricht + handschriftlich annotierte PDF.
- ~32 Wortkorrekturen eingearbeitet (Commits `13ff2d8`, `ee89277`). Beispiele:
  „in das“→„auf das Höllenfeuer“; „Was sagt ihr“→„Was sagen die Gelehrten“;
  „Bewusstsein“→„Kenntnis/Erkenntnis“; „größte“→„edelste Ziel“; „Schrift“→„Botschaft“;
  „getäuscht“→„gerieten in Irrtum“; „wahren“→„wörtlichen Bedeutungen“;
  „lexikalische“→„fremde sprachliche Fachausdrücke“; „Nachkommen“→„Küken der Philosophen“;
  „Magier“→„Zoroastrier“; „verschied“→„starb“; „Torheit“→„Dummheit“;
  „unterrichtete“→„berichtete“; „der Logiker“→„der Weltenbewohner“ (al-ʿālamīn);
  „Auswanderer und Helfer“ statt Muhādschirūn/Anṣār (nur S.1);
  Vergleichs-Satz neu formuliert; Schlussklammer „von der irregeleiteten und der
  rechtgeleiteten“. Koranverse im Fließtext mit `{ }` + Referenz markiert
  (Ibrāhīm 14:1, al-Aḥzāb 33:46, al-Baqara 2:213).

## Phase 3 — Muqaddimah: Titel + Vorspann
- „Übersetzt von“ → „**Überprüft von**“ (Cover + Titel).
- Deutscher Titel → „Einleitung von al-Fatwā al-Ḥamawiyyah“; Kapitel „Einleitung“.
- Zwei Vorspann-Seiten ergänzt: **Steckbrief** von Ibn Taymiyyah (stichpunktartig) +
  **Werkeliste** (Auswahl). Commit `732d604`. Ergebnis: 18 Seiten.

## Phase 4 — al-Fatwā al-Ḥamawiyyah (Hauptteil) erstellt
- Neues, eigenständiges PDF (nicht in Muqaddimah integriert), gleiches Layout.
- Quelle: arabischer Originaltext (S. 21–30) — die Bestätigung der Erhabenheit (ʿuluww)
  Allāhs über Seine Schöpfung, mit ~16 Koranversen, 6 Hadithen (Engel, Khāridschiten,
  Ruqya, al-Awʿāl, Ergreifen der Seele, Dschābir an ʿArafāt), den Gedichten von
  ʿAbdullāh ibn Rawāḥa und Umayya ibn Abī aṣ-Ṣalt, und der Widerlegung der mutakallimūn.
- Aus dem Arabischen ins Deutsche übersetzt; Koranstellen mit korrekten Sure:Vers-Referenzen.
- Cover: الفتوى الحموية. Toolchain kopiert nach `build_ham.js` / `content_ham.js` /
  `render_ham.js`. Commit `29edb14`. 18 Seiten.

## Phase 5 — Hamawiyyah: Korrekturen (Audio 3:43 min + markierte PDF)
- 18 Korrekturen (Commit `fa52982`), siehe README-START-HERE Abschnitt 5/6.
- Kern: naṣṣ → „eindeutiger Wortlaut“; „dauernd“; „klarstellen“; „(Ummah)“;
  „Scholastiker“ / „sich unnötig Bemühende“; „Meinungsunterschied“; „sah ich … und sie ist“;
  „[zu ihm kehrt man nicht zurück]“; „falsche Richter (ṭawāghīt)“;
  „Spitzfindige / Geschickte“; „Botschaft“; „Analogien“; Autor-Einschub markiert (`.aside`);
  Gedicht „groß und erhaben“.

## Technische Hinweise / Lessons Learned
- Der Scratchpad (`/tmp/.../scratchpad`) ist **flüchtig** und wird zwischen Sitzungen
  gelöscht. **Alles Wichtige muss ins Git-Repo committet werden** — dort liegen die
  finalen PDFs + Quellcode.
- Audio-Transkription lief via `faster-whisper` (large-v3, CPU) auf die .m4a-Datei.
- Handschriftliche PDF-Anmerkungen wurden durch Rendern der Seiten zu PNG (pypdfium2,
  scale ~2.6) und visuelles Lesen erfasst.
- Zum Öffnen auf dem Mac: falls das PDF zickt, die mitgelieferte `.html` im Browser öffnen.
