-- CreateTable
CREATE TABLE "Sammlung" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Medium" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titel" TEXT NOT NULL,
    "jahr" INTEGER,
    "sammlungId" INTEGER NOT NULL,
    CONSTRAINT "Medium_sammlungId_fkey" FOREIGN KEY ("sammlungId") REFERENCES "Sammlung" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_MediumToTag" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_MediumToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "Medium" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_MediumToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Sammlung_name_key" ON "Sammlung"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Tag_name_key" ON "Tag"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_MediumToTag_AB_unique" ON "_MediumToTag"("A", "B");

-- CreateIndex
CREATE INDEX "_MediumToTag_B_index" ON "_MediumToTag"("B");
