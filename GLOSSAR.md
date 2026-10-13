# Glossar — GRG-INFI

Fachbegriffe des Informatik-Unterrichts (INFI). Jeder Eintrag: **Begriff** — knappe
Definition, danach *Meiden* (verbreitete, aber schwächere Formulierung).

> Referenz der Prepared Lessons. Diese Datei liegt bewusst im **Repo-Root** (nicht
> unter `unterricht/`, siehe Skill `create-lesson`).

## Datenbankentwurf (KM3/KM5)

**Anomalie** — Schema-Fehler, der Einfüge-, Änderungs- oder Löschfehler erzwingt.
*Meiden*: „Datenfehler" — die Daten sind Symptom, das Schema ist die Ursache.

**1NF (Atomarität)** — Jede Zelle enthält genau einen unteilbaren Wert.
*Meiden*: „keine Listen in Zellen" als alleinige Definition — auch
**Wiederholgruppen** (gleichartige Spalten wie `feld1, feld2, feld3`) verletzen die 1NF.

**2NF (volle funktionale Abhängigkeit)** — Kein Nichtschlüssel-Attribut hängt von
einem *Teil* eines zusammengesetzten Schlüssels ab. Nur relevant, wenn der Schlüssel
aus mehreren Spalten besteht.
*Meiden*: „keine Teilabhängigkeiten" ohne Schlüsselbezug; die Annahme, 2NF sei auch
bei Einzel-Spalten-PK verletzbar.

**3NF (keine transitive Abhängigkeit)** — Kein Nichtschlüssel-Attribut hängt über ein
anderes Nichtschlüssel-Attribut vom Schlüssel ab (`A → B → C`).
*Meiden*: „alles hängt nur vom Schlüssel ab" — sinngemäß richtig, aber zu grob.

**partielle Abhängigkeit** — Ein Nichtschlüssel-Attribut hängt nur von einem Teil des
zusammengesetzten Schlüssels ab (Verstoß gegen die 2NF).

**transitive Abhängigkeit** — Kette `Schlüssel → Nichtschlüssel → anderes Attribut`
(Verstoß gegen die 3NF).

**Wiederholgruppe** — Mehrere gleichartige Spalten (`track1, track2, track3`) oder
mehrere Werte in einer Zelle; verletzt die 1NF.

**Denormalisierung** — Bewusstes Zusammenlegen normalisierter Tabellen aus Lese-/
Performance-Gründen — erst nach Messung, nie aus Bequemlichkeit.
*Meiden*: „Entnormalisierung".

## Abfragen (KM4/KM5)

**Self-JOIN** — Ein JOIN einer Tabelle mit sich selbst über zwei Aliase.
*Meiden*: Selbstverbund.

**Gruppierung (GROUP BY + HAVING)** — Zeilen zu Gruppen verdichten und Gruppen mit
einer Bedingung filtern. `WHERE` filtert Zeilen, `HAVING` filtert Gruppen.
*Meiden*: „Gruppen-Where".

**Skalar-Subquery** — Eine Unterabfrage, die genau einen Wert liefert.
*Meiden*: Einzelwert-Abfrage, skalare Abfrage.

**Zeilen-Subquery** — Eine Unterabfrage, die genau eine Zeile liefert (Tupelvergleich).
*Meiden*: Row-Query.

**Tabellen-Subquery** — Eine Unterabfrage in `FROM`, die wie eine Tabelle lesbar ist
(in SQLite mit Alias-Pflicht).
*Meiden*: Inline-View (Oracle-Jargon).

**korrelierte Subquery** — Eine Unterabfrage, die auf Spalten der äußeren Abfrage
verweist und daher pro Außenzeile ausgewertet wird.
*Meiden*: „verschachtelte Abfrage" ohne den Zeilenbezug.

**CTE (Common Table Expression)** — Eine benannte Zwischenabfrage mit `WITH name AS (…)`,
die eine verschachtelte Subquery lesbarer macht.
*Meiden*: „optimierte Subquery" — eine CTE strukturiert, sie optimiert nicht per se.

**View** — Eine gespeicherte, benannte Sicht (`CREATE VIEW`) auf eine Abfrage.
*Meiden*: „virtuelle Tabelle" ohne den Abfrage-Bezug.

## ORM-Einstieg (KM5)

**ORM (Object-Relational Mapping)** — Schicht, die Zeilen relationaler Tabellen
zu Objekten der Programmiersprache mappt (und umgekehrt). Ein ORM **erzeugt**
SQL, es **ersetzt** es nicht — wer das erzeugte SQL nicht lesen kann, baut blind.
*Meiden*: „ORM macht SQL überflüssig".

**Drizzle ORM** — TypeScript-natives ORM mit Schema in Code (`sqliteTable`):
Tabellen, Spalten und Beziehungen als TypeScript-Objekte; Queries sind
typsicher und laufen erst bei `await`. Treiber in unserem Stack: `node:sqlite`.
*Meiden*: „das ORM baut die Tabellen" — `sqliteTable` ist reine Definition.

**Schema-first** — Das Schema (Tabellen/Spalten) wird zuerst als Code-Definition
geschrieben und ist die Quelle für Typen und Queries; die DB-Anlage folgt über
DDL bzw. Migrationen. *Meiden*: Tabellen „im Database-Tool malen" und Code
erraten lassen.

**Parametrisierung** — Werte werden getrennt vom SQL-Text als Parameter
übergeben (`?` + Params-Array): Daten ≠ Code, struktureller Injection-Schutz.
In Drizzle by default (sichtbar in `.toSQL().params`).
*Meiden*: Werte per String-Interpolation in SQL-Text einbetten.

**lazy Query (Query-Builder)** — Der Aufbau `db.select()...from(...)` erzeugt
nur ein Query-Objekt (Promise); ausgeführt wird erst bei `await`.
*Meiden*: „die Query läuft beim Aufbau schon".
