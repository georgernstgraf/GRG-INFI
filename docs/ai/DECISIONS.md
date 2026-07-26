# Decisions

Active architectural and technical decisions still in force.
Superseded decisions are relocated to HISTORY.md.

## 2026-07-26: PMM-Stil für die Lehrplan-Doku (kompetenzmodule/ + Klassenordner)

- **Choice**: Pro unterrichtetem Jahrgang gibt es KM-Steckbriefe in `kompetenzmodule/` und einen
  groß geschriebenen Klassenordner im Root (z. B. `3HWII/`) mit `README.md` (Drehscheibe) +
  `semesterplan-{ws,ss}.md`. `docs/lehrplan/jgN-einheiten.md` nur noch für Gerüste (Jg IV/V)
  und historische Ist-Doku (Jg II).
- **Reason**: Spiegelung der bewährten Struktur aus GRG-SWP (PMM-Stil); trennt didaktische
  Steckbriefe von konkreter Klassenplanung.
- **Considered**: Weiterführen der `jgN-einheiten.md`-Monolithen für alle Jahrgänge.
- **Tradeoff**: Doku liegt an zwei Orten (Steckbrief vs. Semesterplan) — Links pflegen.

## 2026-07-26: Zeitmodell Jg III = 13 echte UE + 2 PLF-DS (2+1-Split)

- **Choice**: Georg 2 h/Woche (1 DS) + Kollege 1 h/Woche; 13 Stoff-UE + 2 PLF-DS pro Semester;
  PLF 1 nach UE 7, PLF 2 nach UE 13; 1 UE = 1 DS à 2 h; Bonus-UE optional bei Ausfallfreiheit.
- **Reason**: Deckt sich mit dem SWP-Modell → Verbund-Sequenz synchron planbar; Ausfälle
  (Feiertage/Krankheit) sind in den ~15 realen DS von 18 Schulwochen einkalkuliert.
- **Considered**: ~12 UE (altes jg3-Format); alle 3 h zu UE verschmelzen (~19 UE).
- **Tradeoff**: Die Kollegen-Stunde läuft inhaltlich versetzt — Absprache nötig (TBD).

## 2026-07-26: Kollegen-Soll = Nicht-SQL-Anteile von KM5/KM6 (Extraktionsvorschlag)

- **Choice**: Dem INFI-Kollegen (1 h/Woche) vorgeschlagen: Use-Case-/Masken-Methodik
  (Applikationsentwurf), Benutzerführung (CLI/TUI), Reportgenerierung, ggf. Import/Export.
- **Reason**: Georgs Vorgabe „alles, was nicht mit SQL und Datenbanken zu tun hat" — aus dem
  ①-Lehrstoff extrahiert; KM5/KM6 sind fast zur Gänze DB-Kern, daher nur diese Kandidaten.
- **Considered**: Kollege übernimmt Übungs-/Vertiefungsstunden parallel.
- **Tradeoff**: Vorschlag noch nicht mit Kollege abgestimmt → `3HWII/README.md` Offene Punkte.

## 2026-07-26: INFI↔SWP-Verbundabstimmung liegt bei Georg

- **Choice**: Der Verbund („eine App, zwei Noten") wird nicht extern koordiniert — Georg
  unterrichtet beide Seiten (SWP 2 h OOP/GUI + INFI 2 h DB). PM-Rahmung bleibt SWP-Kollege (PRE).
- **Reason**: Verkürzt Abstimmungswege; Sequenz-Sync erfolgt über die beiden 3HWII-Pläne.
- **Tradeoff**: PM-Rubrik des Verbundprojekts weiterhin mit SWP-Kollegen zu klären (TBD).

## 2026-07-26: LEHRPLAN.md an ① (NOR40217058) angeglichen

- **Choice**: `docs/lehrplan/LEHRPLAN.md` ist wieder getreuer Extrakt des offiziellen Textes:
  Normalformen→KM3, DDL→KM3, DCL→KM4, Jg V um Bereich Datenbanken (Web-/GUI-Applikationen)
  ergänzt, Absolventenprofil Datenbanken berichtigt, Stundentafel RIS = 2(2)/3(3)/2(2)/2(2)/6(4).
- **Reason**: Schichten-Vergleich ergab: Schul-PDF ② ≡ ①, aber die Repo-Redaktion ③ wich ab
  (mutmaßlich aus Anlage 1.28/TM übernommen). Abweichungstabelle: `docs/lehrplan/RIS.md` §6.
- **Considered**: ③-Redaktion belassen und nur dokumentieren — verworfen, weil LEHRPLAN.md
  per Eigendefinition der ①-Extrakt ist.
- **Tradeoff**: Die historische Abdeckungstabelle in `jg2-einheiten.md` referenziert die alte
  Redaktion (dort vermerkt, Ist-Doku bleibt unverändert).

## 2026-07-26: `jg3-einheiten.md` nach verlustfreier Migration gelöscht

- **Choice**: Inhalte verteilt auf `kompetenzmodule/km5.md`/`km6.md` (Steckbriefe),
  `3HWII/README.md` (Verbund-Doku, Kollegen-Soll, Offene Punkte) und die beiden Semesterpläne
  (24 UE → 13+13 UE mit Workshop-Puffer); danach Datei entfernt.
- **Reason**: PMM-Stil-Ablage (s. o.); doppelte Pflege vermeiden.
- **Tradeoff**: Externe Links auf die alte Datei (z. B. aus GRG-SWP-Doku) zeigen auf 3HWII/ um —
  in den neuen Dateien als Verweis gepflegt.
