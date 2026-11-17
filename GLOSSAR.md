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

**Transaktion / ACID** — Eine Transaktion ist eine Folge von Anweisungen, die
ganz oder gar nicht wirkt. ACID nennt die vier Zusagen: **A**tomarität (alles
oder nichts), **C**onsistency (die Regeln der Datenbank gelten danach),
**I**solation (gleichzeitige Transaktionen stören einander nicht) und
**D**urability (was bestätigt ist, bleibt). *Meiden*: „Transaktion = viele
Befehle auf einmal“ — ohne die vier Zusagen ist es nur ein Stapel.

**Deadlock** — Zwei Transaktionen warten je auf eine Sperre, die die andere
hält; die Datenbank erkennt den Kreis und bricht eine ab.
*Meiden*: „Endlosschleife“ — der Deadlock endet durch Abbruch, nicht durch
Warten.

**Serialisierbarkeit** — Die stärkste Isolationszusage: Das Ergebnis
gleichzeitiger Transaktionen ist so, als wären sie nacheinander gelaufen.
*Meiden*: „serialisierbar = langsam“ — es ist eine Zusage, kein Verfahren.

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

**Wallet** — Programm oder Gerät, das die privaten Schlüssel aufbewahrt; die
Coins selbst liegen in der Kette. *Meiden*: „Die Coins liegen in der Wallet“ —
dort liegen Schlüssel.

**On-Chain / Off-Chain** — On-Chain heißt: in der Kette gespeichert und damit
durch Hashes geschützt; off-chain heißt: außerhalb, etwa in einer normalen
Datenbank. *Meiden*: „on-chain, also wahr“ — geschützt ist die
Unverändertheit, nicht die Richtigkeit.

**Hard Fork** — Änderung der Protokollregeln, die nicht rückwärtskompatibel
ist: Wer nicht aktualisiert, folgt einer anderen Kette. *Meiden*:
„technisches Update“ — ein Hard Fork ist eine Entscheidung von Menschen.

**Governance** — Wer entscheidet, wie sich ein Protokoll ändert (Entwickler,
Miner bzw. Validatoren, Stiftungen, Börsen). *Meiden*: „das Netz entscheidet
selbst“.

**Hashrate** — Rechenleistung pro Sekunde, die im Netz für den Proof of Work
aufgewendet wird; die Größe, an der ein 51-%-Angriff teuer wird.
*Meiden*: „Anzahl der Miner“ — gezählt wird Arbeit, nicht Köpfe.

**Layer 1 (L1)** — Die Hauptkette selbst (z. B. Ethereum L1); Layer-2-Systeme
rechnen ausgelagert und schreiben nur Ergebnisse zurück.
*Meiden*: „L1 = schnell“ — L1 ist die langsame, aber maßgebliche Schicht.

**Knoten (Node)** — Ein Rechner, der am Netz teilnimmt, eine Kopie der Kette
hält und prüft. *Meiden*: „Knoten = Nutzer“ — und nicht verwechseln mit einem
Knoten im Graphen (SA-02).

**Pruning** — Alte Blöcke löschen und nur die aktuelle Spitze behalten, um
Platz zu sparen; kostet einen Teil der Prüfbarkeit.
*Meiden*: „Archivierung“ — Pruning entfernt Geschichte.

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

**TAO (The Associations and Objects)** — Metas Graph-Cache vor den
MySQL-Datenbanken: hält Objekte (Nutzer, Seiten, Fotos) und Assoziationen
(Freundschaft, Like) im Speicher und beantwortet 2013 rund 96 % der
Lesezugriffe, ohne die Datenbank zu fragen.
*Meiden*: „TAO ist die Datenbank“ — TAO ist die Schicht davor.

**Cache / memcache** — Zwischenspeicher im Arbeitsspeicher, der Antworten
vorrätig hält; **memcache** ist Metas verteilter Schlüssel-Wert-Cache für
alles, was keine Graph-Struktur braucht. Die **Trefferquote** ist der Anteil
der Anfragen, die ohne Datenbank beantwortet werden.
*Meiden*: „Cache = Kopie der Datenbank“ — ein Cache hält nur, was gerade
gebraucht wurde.

**UDB (User Database)** — Metas größter MySQL-Verbund, massiv geshardet, mit
zig Petabytes; die Hauptdatenbank hinter TAO.
*Meiden*: „UDB ist eine eigene Engine“ — darunter läuft MySQL, seit 2017 mit
MyRocks.

**ZippyDB** — Metas stark konsistenter Schlüssel-Wert-Speicher für Metadaten,
Zähler und Konfiguration; shardweise per Multi-Paxos repliziert, Schreiben über
Leader-Lease, Konflikte per OCC. *Meiden*: „ZippyDB ist TAO“ — TAO ist der
Graph-Cache, ZippyDB der konsistente Schlüssel-Wert-Speicher.

**Paxos / Multi-Paxos** — Einigungsprotokoll (Konsens): Eine Mehrheit der
Replikate legt dieselbe Reihenfolge der Schreibvorgänge fest. Multi-Paxos hält
dafür dauerhaft einen Vorsitzenden.
*Meiden*: „Paxos = Abstimmung nach Knotenzahl“ — gewichtet wird die Rolle im
Protokoll, nicht die Kopfzahl.

**Leader / Primary / Replikat** — Replikate sind Kopien derselben Daten auf
mehreren Rechnern; der Leader (bei MySQL: Primary) ist der eine, der in einer
Epoche schreiben darf. *Meiden*: „alle Replikate sind gleich“ — beim Schreiben
nicht.

**Replikation / Replikationsstrom** — Das laufende Nachführen von Kopien;
MySQL schreibt alle Änderungen in ein Protokoll (den Replikationsstrom), aus
dem Replikate und TAO die Änderungen lesen.
*Meiden*: „Replikation = Backup“ — ein Replikat dient dem Betrieb, ein Backup
der Rettung.

**Stark konsistent (strong consistency)** — Jede bestätigte Änderung ist sofort
überall sichtbar; kein Leser bekommt einen alten Stand.
*Meiden*: „stark konsistent = immer verfügbar“ — bei einem Netzwerkausfall
kostet sie Verfügbarkeit oder Wartezeit.

**B-Baum** — Sortierter Baum, in dem jede Zeile an einem aus dem Schlüssel
berechneten Platz liegt: schnelle Einzelzugriffe, aber beim Schreiben wird eine
ganze Seite neu geschrieben (InnoDB). *Meiden*: „B-Baum = Index“ — er ist die
Speicherstruktur, der Index ist seine Sicht.

**InnoDB** — MySQLs klassische Speicher-Engine (B-Baum), sperrt Zeilen **und**
Lücken (Gap-Locks). *Meiden*: „InnoDB = MySQL“ — InnoDB ist eine Engine
innerhalb von MySQL.

**MyRocks** — MySQLs LSM-Engine (RocksDB): 40–50 % weniger Platz, rund ein
Zehntel der Schreiblast, dafür langsamere Einzelzugriffe und keine Gap-Locks.
*Meiden*: „MyRocks ist eine andere Datenbank“ — dieselbe SQL- und
Transaktionsschicht, andere Engine.

**Benchmark / Schiefverteilung (Skew)** — Ein Benchmark ist ein Lasttest mit
nachgebauter Produktionslast; Schiefverteilung heißt, dass wenige Schlüssel
sehr oft und viele selten benutzt werden.
*Meiden*: „Benchmark = Garantie“ — er misst ein Szenario, nicht die Zukunft.

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
