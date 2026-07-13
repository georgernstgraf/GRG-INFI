# ER

Entity - Relationship - Modellierung

Folie "redgate.pdf"

- M Mandatory
- N Nullable
- FK Foreign Key
- PK Primary Key
- U Unique
- Krähenfüße (many) vs. Strich (one)
- Doppelstrich (exactly one) vs. Strich (zero or one)
- o - optional / nullable

## HÜ anschluss an letzte:

- Mitarbeiter der Bibliothek
... leiht aus ... nimmt zurück
- bonus: Buch -> Exemplar 
- Buch (Titel, Autor, Verlag, ISBN) -> Exemplar (physisches Exemplar,BuchID, Standort, Status)

Für DIESE Hausübung im BigER Plugin modellieren.