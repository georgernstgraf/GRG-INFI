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
*Meiden*: „die Query läuft beim Aufbau schon“.

## Blockchain und verteilte Datenbanken (SA-01, Anschluss KM5/KM9)

**Blockchain** — Append-only-Kette von Blöcken, in der jeder Block den Hash
seines Vorgängers trägt; jede Teilnehmerin hält ein geprüftes Replikat, der
gültige Stand entsteht per Konsensregel statt per Administrator.
*Meiden*: „unhackbare Datenbank“ — gehackt werden Börsen, Bridges und
Schlüssel, nicht die Hash-Kette.

**Block** — Ein Datensatz mit Index, Zeitstempel, Vorgänger-Hash,
Merkle-Wurzel, Nonce und eigenem Hash; die Transaktionen liegen in eigenen
Zeilen und werden über die Merkle-Wurzel abgedeckt.
*Meiden*: „Block speichert die Transaktionen im Hash“ — der Hash ist eine
Prüfsumme, kein Speicher.

**Append-only Ledger** — Datenbank, die nur anhängt: kein `UPDATE`, kein
`DELETE`; Korrekturen sind Gegenbuchungen, der Zustand (Saldo) wird aus den
Ereignissen berechnet. *Meiden*: „unveränderliche Datenbank“ ohne den
Gegenbuchungs-Teil — sonst bleibt unklar, wie Fehler korrigiert werden.

**Hashfunktion (SHA-256)** — Bildet beliebigen Text auf 256 Bit ab:
deterministisch, lawinenartig (ein Zeichen ändert den Hash völlig) und
einwegig (nicht zurückrechenbar).
*Meiden*: „Verschlüsselung“ — ein Hash ist nicht entschlüsselbar.

**Merkle-Baum** — Paarweise Hashes über die Transaktionen eines Blocks, bis
eine **Merkle-Wurzel** übrig bleibt; eine geänderte Transaktion ändert die
Wurzel, ein Einschlussbeweis braucht nur `log₂(n)` Hashes.
*Meiden*: „Hash-Liste“ — der Baum ist gerade die Verkürzung der Prüfung.

**Nonce** — Frei wählbare Zahl im Block-Header, die beim Mining so lange
erhöht wird, bis der Block-Hash das Schwierigkeitsziel erfüllt.
*Meiden*: „Zufallszahl“ ohne Zweck — die Nonce ist der Suchparameter des
Proof of Work.

**Proof of Work (Mining)** — Nachweis aufgewendeter Rechenarbeit: Der
Block-Hash muss mit `d` Hex-Nullen beginnen, erwartet werden `16^d` Versuche;
die Schwierigkeit wird so angepasst, dass die Blockzeit konstant bleibt.
*Meiden*: „Rechenaufgabe, die etwas berechnet“ — das Ergebnis ist nur der
Nachweis, kein Nutzen.

**Proof of Stake** — Konsens über gebundenes Kapital statt Rechenarbeit: Wer
mehr Einsatz hinterlegt, darf eher Blöcke erzeugen; Regelverstöße kosten den
Einsatz (Slashing). *Meiden*: „ohne Energieverbrauch, also gratis“ — Kapital
und Zentralisierungsrisiko sind der Preis.

**Konsensregel (Nakamoto)** — Gültig ist die Kette mit der meisten
aufgewendeten Arbeit („längste Kette“); bei Gleichstand gewinnt die zuerst
gesehene. *Meiden*: „Mehrheit der Knoten entscheidet“ — Knoten sind gratis
vermehrbar.

**Fork / verwaister Block** — Zwei Miner bauen fast gleichzeitig auf
denselben Vorgänger; der unterlegene Zweig wird verwaist, seine Transaktionen
gelten als unbestätigt und wandern meist in den nächsten Block.
*Meiden*: „Fehler im Netz“ — Forks sind normaler Betrieb.

**Bestätigung / Finalität** — Anzahl der Blöcke nach einer Transaktion;
Finalität ist bei Proof of Work wahrscheinlich (nach sechs Blöcken praktisch
unumkehrbar), nicht absolut.
*Meiden*: „sofort endgültig“ — Endgültigkeit ist eine Frage der Arbeit.

**Sybil-Angriff** — Ein Angreifer erzeugt beliebig viele billige Identitäten
(Knoten), um Abstimmungen zu kippen; deshalb wird nach Arbeit oder Stake
gewichtet, nicht nach Knotenzahl.
*Meiden*: „viele Nutzer, also Mehrheit“.

**51-%-Angriff** — Mehrheit der Rechenleistung (bzw. des Stakes) erlaubt
Reorgs und Double Spending; der Angreifer muss den angegriffenen Block **und
alle Folgeblöcke** neu rechnen und dabei die ehrliche Kette überholen.
*Meiden*: „51 % = Kette komplett übernommen“ — alte Blöcke bleiben, es geht
um die aktuelle Spitze.

**Double Spending** — Dieselbe Münze zweimal ausgeben: erst in einer Kette,
die per Reorg verdrängt wird, dann in der gültigen.
*Meiden*: „Betrug am Protokoll“ — technisch ist es ein Reorg-Wettlauf.

**Smart Contract** — Programm auf der Kette, das Bedingungen automatisch
ausführt; Code ohne Gericht, Fehler sind unwiderruflich.
*Meiden*: „digitaler Vertrag“ — die rechtliche Verbindlichkeit ist eine
eigene Frage.

**Oracle-Problem** — Die Kette garantiert Unverändertheit, nicht Wahrheit:
Off-Chain-Daten (Sensoren, Kurse, Urkunden) sind nur so ehrlich wie ihre
Quelle. *Meiden*: „on-chain, also geprüft“.

**Bridge** — Vertrag, der Vermögenswerte auf einer Kette sperrt und auf einer
anderen ausgibt; wegen des verwahrten Werts eines der häufigsten Ziele von
Angriffen. *Meiden*: „Chain-zu-Chain-Transfer“ — übertragen wird eine
Forderung, nicht der Coin.

**Verwahrung (Custody)** — Wer den privaten Schlüssel hält, verfügt über die
Guthaben: „Not your keys, not your coins“; Börsen sind Verwahrer und damit
ein zentraler Ausfallpunkt.
*Meiden*: „Die Coins liegen auf der Börse“ — dort liegt ein Anspruch, kein
Schlüssel.

## Verteilte Datenbanken in der Praxis (SA-02, Anschluss KM5/KM9)

**Sharding** — Aufteilung der Daten auf mehrere unabhängige Datenbanken
(*Shards*), meist über einen Schlüssel berechnet (`Shard = shard_von(id)`);
Ziel ist Lastverteilung, Preis sind shard-übergreifende Transaktionen.
*Meiden*: „Partitionierung löst Skalierung“ — sie verschiebt das Problem auf
die Transaktionsgrenze.

**Shard** — Eine unabhängige Datenbank-Instanz mit eigenem Log, eigenen Sperren
und eigener Replikation; ein Objekt gehört dauerhaft genau einem Shard, eine
Kante liegt beim Quellknoten. *Meiden*: „Tabelle“ — ein Shard enthält viele
Tabellen.

**μShard (Mikro-Shard)** — Kleinste verschiebbare Einheit innerhalb eines
physischen Shards (bei ZippyDB zehntausende pro Shard); macht Resharding ohne
Änderung der Anwendung möglich. *Meiden*: „Kopie“ — ein μShard ist eine
Aufteilung, keine Redundanz.

**Gap-Lock** — Sperre auf den Bereich *zwischen* zwei Zeilen, die Einfügungen
dort verhindert (InnoDB); sichert Eindeutigkeit über Präfixe und
statement-basierte Replikation. MyRocks sperrt nur Zeilen.
*Meiden*: „Sperre auf die nächste Zeile“ — gesperrt wird die Lücke.

**Zwei-Phasen-Commit (2PC)** — Abstimmungsprotokoll für Transaktionen über
mehrere Shards: erst *prepare* (alle sperren und stimmen zu), dann *commit*
(alle schreiben). Scheitert einer in Phase 1, bricht alles ab.
*Meiden*: „verteilte Transaktion ist automatisch atomar“ — ohne persistierten
Fortschritt bleibt nach einem Absturz ein halber Zustand.

**Zwei-Phasen-Sperren (2PL)** — Sperren werden genommen und erst nach dem
Commit wieder freigegeben; in der Wachstumsphase dürfen keine neuen Sperren
dazukommen. *Meiden*: „2PC und 2PL sind dasselbe“ — 2PC ist das Protokoll,
2PL das Sperrverfahren.

**Lease** — Zeitlich begrenztes Recht (z. B. „nur dieser Leader darf
schreiben“), das durch Herzschläge verlängert wird und bei Ausbleiben
**abläuft**. Ersetzt an der Spitze die Sperre, weil ein abgestürzter Halter
niemanden blockiert. *Meiden*: „Lease = Sperre“ — eine Sperre gibt man frei,
eine Lease läuft ab.

**Epoche (Leader-Lease)** — Zähler pro Shard, der bei jedem Leader-Wechsel
steigt; Schreibvorgänge einer älteren Epoche werden verworfen. So kann es nie
zwei Leader geben. *Meiden*: „Zeitstempel“ — die Epoche ordnet Führung, nicht
Daten.

**Optimistisches Concurrency Control (OCC)** — Lesen ohne Sperre, Prüfung erst
beim Commit: Überschneiden sich Lese-/Schreibmengen, wird eine Transaktion
abgebrochen und wiederholt. *Meiden*: „ohne Sperren, also ohne Konsistenz“ —
OCC ist serialisierbar, nur ohne Warten.

**Atomare Sichtbarkeit (RAMP)** — Ein Leser sieht entweder alle oder keine
Änderung einer Transaktion, erreicht über Versionen statt Sperren
(Read-Atomic Multi-Partition). *Meiden*: „Serialisierbarkeit“ — RAMP garantiert
Atomarität, nicht die globale Reihenfolge.

**Eventual Consistency** — Replikate laufen hinterher; ohne Zusatzangabe ist
offen, wie weit. *Meiden*: „Datenverlust“ — der Stand ist alt, nicht falsch.

**Bounded Staleness** — Verzögerung mit zugesicherter Obergrenze, pro
Lesevorgang nachweisbar (Skybridge). Die stärkere, ehrlichere Form von
Eventual Consistency. *Meiden*: „sofort konsistent“ — die Schranke ist endlich,
nicht null.

**LSM-Baum (Log-Structured Merge Tree)** — Speicherstruktur, die Schreibvorgänge
in sortierte Dateien schreibt und sie im Hintergrund verschmilzt: wenig
Write-Amplification und Platz, dafür langsamere Einzelzugriffe (MyRocks).
*Meiden*: „Index“ — der LSM-Baum ist die Speicherstruktur selbst.

**Write-Amplification** — Verhältnis von tatsächlich geschriebenen Bytes zu
Nutzdaten; hoch bei B-Bäumen (ganze Seiten), niedrig bei LSM-Bäumen.
*Meiden*: „Schreiblast“ — gemeint ist die Vervielfachung, nicht die Menge.

**billion-Falle** — Englisch *billion* = 10⁹ = deutsch **Milliarde**; deutsch
*Billion* = 10¹² = englisch *trillion*; *quadrillion* = 10¹⁵ = deutsch
**Billiarde**. Ab „billion“ liegt der deutsche Name eine Sprosse tiefer.
*Meiden*: „billion = Billion“ — Faktor 1000.
