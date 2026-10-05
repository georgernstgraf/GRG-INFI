-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Medium" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titel" TEXT NOT NULL,
    "jahr" INTEGER,
    "bewertung" INTEGER NOT NULL DEFAULT 0,
    "sammlungId" INTEGER NOT NULL,
    CONSTRAINT "Medium_sammlungId_fkey" FOREIGN KEY ("sammlungId") REFERENCES "Sammlung" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Medium" ("id", "jahr", "sammlungId", "titel") SELECT "id", "jahr", "sammlungId", "titel" FROM "Medium";
DROP TABLE "Medium";
ALTER TABLE "new_Medium" RENAME TO "Medium";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
