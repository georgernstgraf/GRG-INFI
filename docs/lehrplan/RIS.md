# RIS-Recherche — Rechtsstand des Lehrplans (Fach INFI)

> **Stand der Recherche:** 2026-07-26 · **Ergebnis:** Unser Lehrplan ist **aktuell, nicht obsolet**.
> Diese Datei dokumentiert die Recherche im RIS (Rechtsinformationssystem des Bundes) und den
> Vergleich der drei Textschichten (offiziell / Schuladaption / Unterricht) für das Fach
> **Informatik und Informationssysteme** (INFI).
>
> **Schwester-Recherche:** Dieselbe Verordnung und Anlage wurde für das Fach SWP im Repo
> `../GRG-SWP` recherchiert — siehe
> [`GRG-SWP/docs/lehrplan/RIS.md`](https://github.com/georgernstgraf/GRG-SWP/blob/main/docs/lehrplan/RIS.md).
> Die Rechtsstand-Fakten (§1–§3) sind identisch und dort ausführlich belegt; hier die INFI-Sicht.

---

## 1. Rechtsstand

| Feld | Wert |
|------|------|
| **Geltende Fassung** | **BGBl. II Nr. 262/2015 idF BGBl. II Nr. 235/2019** |
| **Anlage** | 1.24 — Lehrplan der Höheren Lehranstalt für **Wirtschaftsingenieure – Betriebsinformatik** |
| **Fach** | Informatik und Informationssysteme (Fach Nr. 3 im Fachlehrplan-Teil der Anlage 1.24) |
| **Inhaltlicher Stand des INFI-Lehrstoffs** | **unverändert seit 2015** (235/2019 fügte nur die Deutschförderklasse-Stundentafel an) |
| **Ersatz-Lehrplan in Begutachtung?** | **Nein** (kein Entwurf für WII-Betriebsinformatik gefunden) |

## 2. Fundstellen

| Was | URL / Ort |
|-----|-----------|
| Konsolidierte Fassung (gesamte Verordnung) | <https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=20009288> |
| **Anlage 1.24, Volltext konsolidiert** | <https://www.ris.bka.gv.at/Dokumente/Bundesnormen/NOR40217058/NOR40217058.html> |
| Original-Kundmachung 262/2015 | <https://www.ris.bka.gv.at/Dokumente/BgblAuth/BGBLA_2015_II_262/BGBLA_2015_II_262.html> |
| Novelle 235/2019 | <https://www.ris.bka.gv.at/Dokumente/BgblAuth/BGBLA_2019_II_235/BGBLA_2019_II_235.html> |
| Schul-Stundentafel (Spengergasse) | <https://www.spengergasse.at/?page_id=2085> |
| Schul-Download „Lehrplan" | <https://www.spengergasse.at/wp-content/uploads/2020/04/LP_ab14_Betriebsinformatik.pdf> (= RIS-Originaltext) |
| **Schuladaption INFI (Schicht ②, in diesem Repo)** | [`HWII_INFI.pdf`](HWII_INFI.pdf) — mit `pdftotext -layout` lesbar |

## 3. Novellen-Historie (geprüft bis 2026-07-26)

Kompaktfassung — ausführliche Tabelle mit allen Prüfvermerken:
[`GRG-SWP/docs/lehrplan/RIS.md`](https://github.com/georgernstgraf/GRG-SWP/blob/main/docs/lehrplan/RIS.md) §3.

| Novelle | Berührt Anlage 1.24 / INFI-Lehrstoff? |
|---------|----------------------------------------|
| BGBl. II Nr. 262/2015 | **Erlass** (Lehrplanpaket HTL 2015) |
| BGBl. II Nr. 55/2017 | nein |
| BGBl. II Nr. 235/2019 | **ja, aber nur Anhang**: Deutschförderklasse-Stundentafel — INFI-Lehrstoff unverändert |
| BGBl. II Nr. 250/2021 | nein |
| BGBl. II Nr. 383/2021 | nein (andere Anlagen, **nicht 1.24**) |
| BGBl. II Nr. 368/2022 | nein (**Sonderformen**/Berufstätige — eigene Verordnung) |
| BGBl. II Nr. 2/2023 | nein (Anlagen 1.11, 1.17) |

## 4. Stundentafel-Zeile INFI (offiziell, aus NOR40217058)

> **3. Informatik und Informationssysteme⁴ — I. 2(2) · II. 3(3) · III. 2(2) · IV. 2(2) · V. 6(4) · Summe 15 · Lehrverpflichtungsgruppe I**

Fußnote 4: *„Mit Übungen in elektronischer Datenverarbeitung im Ausmaß der in Klammern angeführten Wochenstunden."*

Die Spengergasse-Stundentafel (schulautonom) weist abweichend **2 / 2 / 3 / 2 / 4 = 13** aus:
Jg III **+1**, Jg II **−1**, Jg V **−2** gegenüber der offiziellen Stundung. Die inhaltliche
Lehrstoffverteilung (Anlage 1.24) ist davon nicht berührt; die Umstundung ist über die
schulautonome Klausel (§5) gedeckt.

> **Korrektur 2026-07-26:** [`METADATA.md`](METADATA.md) nannte bisher fälschlich
> *2(2)/2(2)/2(2)/2(2)/4(4)* als RIS-Werte — richtig ist **2(2)/3(3)/2(2)/2(2)/6(4)** (dort
> inzwischen berichtigt).

## 5. Schulautonome Bestimmungen

- **Anlage 1.24, Abschnitt IV:** *„Siehe Anlage 1 mit dem Hinweis, dass die Bestimmungen über
  schulautonome Schwerpunktsetzungen nicht zum Tragen kommen."*
- Anlage 1 (idF 383/2021) erlaubt u. a.: *„… die Aufteilung der Wochenstunden … und die
  Verteilung des Lehrstoffs auf die Jahrgänge bzw. Semester abweichend vorgenommen werden."* —
  die Umstundung (§4) und inhaltliche Schwerpunktsetzungen sind über diese allgemeine Klausel
  gedeckt.
- Auf der Schulwebsite publizierte schulautonome Abweichungen: Fächer **„Digitale Technologien"**
  und **„Smart Production Lab"** anstelle offizieller Fächer — **kein Bezug zum INFI-Lehrstoff.**

## 6. Drei-Schichten-Vergleich (offiziell ① / Schuladaption ② / Repo ③ + Unterricht)

**Befund 2026-07-26:** Die Schuladaption ② ([`HWII_INFI.pdf`](HWII_INFI.pdf)) ist **inhaltlich
deckungsgleich mit ①** (nur Format: K-Labels, andere Gliederung). Abweichungen fanden sich stattdessen
in der **älteren Redaktion von [`LEHRPLAN.md`](LEHRPLAN.md)** (Schicht ③) — diese wurden mit
dem heutigen Stand **korrigiert** (LEHRPLAN.md ist wieder getreuer ①-Extrakt). Die Abweichungen
(Stand vor der Korrektur, mutmaßlich aus der gleichnamigen Fachbeschreibung der Anlage 1.28 /
Technisches Management übernommen):

| Thema | ① Offiziell (RIS) = ② Schul-PDF | ③ LEHRPLAN.md (alt, korrigiert) |
|-------|----------------------------------|----------------------------------|
| Normalformen | **KM3** (im Datenbankentwurf) | KM4 → **nach ① zurückverschoben** |
| Data Definition Language (physischer Entwurf, Abfragegeneratoren, SQL) | **KM3** | fehlte → **ergänzt** |
| „einfache Datenbankabfragen" | nicht wörtlich in ① | KM3-Zusatz → **entfernt** |
| Data Control Language | **KM4** (in den Abfragesprachen) | KM5 → **nach ① verschoben** |
| KM4-Bildungsaufgabe „Normalformen einhalten" | nicht in ① | vorhanden → **entfernt** |
| KM5-Bildungsaufgabe „Datenzugriff ermöglichen/verweigern" | nicht in ① (nur „komplexe Abfragen …") | vorhanden → **entfernt** |
| KM6-Bildungsaufgabe „Datenbankstrukturen analysieren/optimieren" | nicht in ① (2 Punkte) | 3. Punkt → **entfernt** |
| Jg V, Bereich **Datenbanken** (DB-Anwendung implementieren; Web- und GUI-Applikationen) | **vorhanden** (9.+10. Semester) | fehlte → **ergänzt** |
| Absolventenprofil Datenbanken | „Datenbestände mit Hilfe von Abfragesprachen auswerten … eine Datenbankanwendung implementieren" | „Datenzugriffe gezielt ermöglichen/verweigern …" → **korrigiert** |

> **Didaktische Einordnung:** Die Korrektur ändert die Planung kaum — ① erwartet Normalformen
> bereits in KM3 (Jg II); die tatsächliche Lücke aus dem Unterricht SJ 2025/26 (nur gestreift)
> wird weiterhin in KM5 geschlossen (siehe [`kompetenzmodule/km5.md`](../../kompetenzmodule/km5.md)).
> DCL/Benutzerverwaltung wird in KM5 unterrichtet — ① deckt das über den KM5-Lehrstoffpunkt
> „Benutzerverwaltung" (DCL selbst steht in ① bei KM4).

## 7. Offizieller INFI-Extrakt (①, getreu aus NOR40217058)

→ Gepflegt in [`LEHRPLAN.md`](LEHRPLAN.md) (seit 2026-07-26 verifiziert gegen ①).
Absolventenprofil (III. Abschnitt der Anlage 1.24), Bereich Datenbanken:

> *„Im Bereich Datenbanken können die Absolventinnen und Absolventen aus einer Problemstellung
> ein Datenmodell entwerfen und dieses in einem Datenbanksystem umsetzen. Sie können Datenbestände
> mit Hilfe von Abfragesprachen auswerten, die für eine Datenbankanwendung notwendigen
> Anwendungsfälle, Eingabemasken und Ausgabeformate identifizieren sowie eine
> Datenbankanwendung implementieren."*

## 8. Konsequenzen für dieses Repo

1. [`METADATA.md`](METADATA.md) führt die Rechtsgrundlage als **„BGBl. II Nr. 262/2015 idF
   BGBl. II Nr. 235/2019"** und die korrekte RIS-Stundentafel (§4).
2. [`LEHRPLAN.md`](LEHRPLAN.md) ist getreuer ①-Extrakt; Schuladaption ② liegt als
   [`HWII_INFI.pdf`](HWII_INFI.pdf) bei; der reale Unterricht (③) ist in
   `docs/lehrplan/jg2-einheiten.md` (Ist SJ 2025/26) bzw. `3HWII/` (Plan SJ 2026/27) dokumentiert.
3. **Re-Check-Empfehlung:** einmal jährlich (Sommerferien) die konsolidierte Fassung (Link oben)
   auf eine neue „Änderung"-Zeile prüfen. Nächster Check: Sommer 2027.
