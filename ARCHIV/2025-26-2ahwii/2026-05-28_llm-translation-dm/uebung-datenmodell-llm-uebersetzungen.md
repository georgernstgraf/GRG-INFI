# Datenmodellierung: Übersetzungsplattform mit KI

## Szenario

Du betreibst eine mehrsprachige App. Die Benutzeroberfläche der App
existiert in vielen Sprachen — die englischen Originaltexte liegen in
einer Datei (`strings.xml`). Für jede weitere Sprache gibt es ein
eigenes Übersetzungsverzeichnis (z. B. `values-de` für Deutsch).

Um die Übersetzungen zu erstellen, setzt du mehrere große
Sprachmodelle (LLMs) ein — z. B. GPT-4, Claude 4, Gemini 3.1 Pro,
Llama 4, DeepSeek R2, Mistral Large und andere.

### Wie läuft die Übersetzung ab?

Jedes LLM kann englische Texte in jede beliebige Zielsprache
übersetzen. Allerdings sind LLMs nicht perfekt — sie machen Fehler,
besonders in Sprachen, die sie weniger gut beherrschen.

Damit du die Qualität einschätzen kannst, gibt **jedes LLM eine
Selbstauskunft** ab: Auf einer Skala von 1 (sehr schlecht) bis 10
(perfekt) gibt es an, wie gut es eine bestimmte Sprache beherrscht.
Ein Modell kann für Deutsch 10/10 angeben, für Japanisch aber nur 4/10.

Für jedes **Paar aus (englischer Quelltext, Zielsprache)** können
**mehrere LLMs** ihre Übersetzung einreichen. Jede einzelne
Einreichung nennen wir einen **Vote** oder Übersetzungsvorschlag.
Ein Vote enthält den übersetzten Text und den Zeitpunkt der
Einreichung.

Es ist möglich, dass dasselbe LLM für denselben Quelltext und
dieselbe Sprache mehrmals abstimmt — vielleicht mit einer anderen
Übersetzung. Ein Vote ist daher eindeutig über die Kombination aus
**(Modell, Quelltext, Sprache, Übersetzungstext)**.

### Die Daten im Überblick

**Sprachen:**
Jede Sprache wird durch folgende Informationen beschrieben:

- Einen **BCP-47-Code** (z. B. `de`, `en-US`, `zh-Hans-CN`)
- Einen **POSIX-Code** (z. B. `de_AT`, `fr_FR`)
- Einen **ISO 639-3-Code** (z. B. `deu`, `eng`, `cmn`)
- Einen **Verzeichnisnamen** (z. B. `values-de`, `values-zh-rCN`)
- Den **englischen Namen** der Sprache (z. B. `German`, `Chinese`)
- Optional den **Whisper-Sprachcode** (für Spracherkennung, z. B. `german`)

Jeder dieser Codes ist weltweit eindeutig.

**Quelltexte (Master Strings):**
Die englischen Originaltexte, die übersetzt werden sollen. Jeder
Text kommt nur einmal vor. Ein Beispiel: Der Text
`"Are you sure you want to delete this preset?"` kommt genau
einmal in der Datenbank vor — auch wenn er in 120 Sprachen
übersetzt wird.

**LLM-Modelle:**
Jedes Modell hat einen Namen (z. B. `gemini-3.1-pro`,
`opus-4.7`, `gpt-5.2`, `deepseek-r2`). Der Name ist eindeutig.

**Selbsteinschätzung (Language Proficiency):**
Jedes LLM kann pro Sprache eine Selbsteinschätzung abgeben
(Level 1–10). Ein Modell bewertet jede Sprache höchstens einmal.

**Votes (Übersetzungsvorschläge):**
Ein Vote verbindet ein LLM, einen Quelltext und eine Zielsprache
miteinander und enthält die vorgeschlagene Übersetzung sowie den
Zeitpunkt der Einreichung.

---

## Aufgaben

### Aufgabe (a) – Entitäten und Beziehungen

Lies das Szenario genau durch.

1. **Welche Entitäten** (Tabellen) ergeben sich aus der
   Beschreibung? Notiere sie mit ihren Attributen (Feldern).
2. **In welcher Beziehung** stehen die Entitäten zueinander?
   Handelt es sich um 1:N-, N:M- oder 1:1-Beziehungen?
3. **Skizziere ein ER-Diagramm** (mit Stift und Papier, in bigER
   oder einem anderen Tool deiner Wahl). Zeige alle Entitäten,
   Attribute und Beziehungen inkl. Kardinalitäten.

### Aufgabe (b) – Prisma Schema

Setze das Datenmodell aus Aufgabe (a) in eine gültige
`schema.prisma`-Datei um.

Achte auf:

- **Datasource**: SQLite als Datenbank
- **Generator**: Prisma Client mit `runtime = "deno"`
- **Typen** für jedes Feld (`String`, `Int`, `Boolean`, `DateTime`,
  optional mit `?`)
- **Primärschlüssel** (`@id`)
- **Defaults** (z. B. Auto-Increment, aktuelle Uhrzeit)
- **Unique-Constraints** (`@unique` oder `@@unique`) — welche
  Felder oder Feldkombinationen müssen eindeutig sein?
- **Relationen** zwischen den Tabellen (`@relation`, Fremdschlüssel)
- **Löschverhalten** (`onDelete`) — was passiert, wenn ein
  LLM, ein Quelltext oder eine Sprache gelöscht wird?

Die Namen der Modelle und Felder sollen **englisch** sein.

### Aufgabe (c) – Indizes

Füge in dein Prisma-Schema `@@index`-Einträge für folgende
Suchmuster ein:

- Schnelle Suche aller Votes für eine bestimmte Sprache
- Schnelle Suche aller Votes eines bestimmten LLMs
- Schnelle Suche aller Selbsteinschätzungen für ein bestimmtes
  LLM-Sprach-Paar

Begründe in einem Kommentar (`///`), warum jeder Index die
Performance verbessert.

### Aufgabe (d) – Generator für ERD

Ergänze dein Schema um einen **zweiten Generator**, der mit
`prisma-erd-generator` ein ERD-Diagramm im **Mermaid-Format**
erzeugt.

*Hinweis:* Dieser Generator benötigt einen Eintrag in der
`deno.json`:
```json
"prisma-erd-generator": "npm:prisma-erd-generator@^2.1.0"
```

---

## Hinweise zur Bearbeitung

1. Speichere deine Lösung als `schema.prisma`.
2. Teste dein Schema mit:
   ```bash
   deno run -A npm:prisma validate
   ```
3. Optional: Generiere das ERD mit:
   ```bash
   deno run -A npm:prisma generate
   ```
4. Achte auf die korrekte Syntax der Relationen und Constraints.
5. Die Kommentare (`///`) helfen, die Absicht hinter Indizes und
   Feldern zu dokumentieren.

---

*Viel Erfolg!*
