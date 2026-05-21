-- CreateTable
CREATE TABLE "Kuenstler" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "land" TEXT
);

-- CreateTable
CREATE TABLE "Album" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titel" TEXT NOT NULL,
    "erscheinungsjahr" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Song" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titel" TEXT NOT NULL,
    "dauer_sek" INTEGER NOT NULL,
    "track_nummer" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Nutzer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "benutzername" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "premium" BOOLEAN NOT NULL
);

-- CreateTable
CREATE TABLE "Playlist" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "erstellungsdatum" DATETIME NOT NULL,
    "nutzerId" INTEGER,
    CONSTRAINT "Playlist_nutzerId_fkey" FOREIGN KEY ("nutzerId") REFERENCES "Nutzer" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_AlbumToKuenstler" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_AlbumToKuenstler_A_fkey" FOREIGN KEY ("A") REFERENCES "Album" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_AlbumToKuenstler_B_fkey" FOREIGN KEY ("B") REFERENCES "Kuenstler" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_AlbumToSong" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_AlbumToSong_A_fkey" FOREIGN KEY ("A") REFERENCES "Album" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_AlbumToSong_B_fkey" FOREIGN KEY ("B") REFERENCES "Song" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_NutzerToSong" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_NutzerToSong_A_fkey" FOREIGN KEY ("A") REFERENCES "Nutzer" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_NutzerToSong_B_fkey" FOREIGN KEY ("B") REFERENCES "Song" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_PlaylistToSong" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_PlaylistToSong_A_fkey" FOREIGN KEY ("A") REFERENCES "Playlist" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_PlaylistToSong_B_fkey" FOREIGN KEY ("B") REFERENCES "Song" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_AlbumToKuenstler_AB_unique" ON "_AlbumToKuenstler"("A", "B");

-- CreateIndex
CREATE INDEX "_AlbumToKuenstler_B_index" ON "_AlbumToKuenstler"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AlbumToSong_AB_unique" ON "_AlbumToSong"("A", "B");

-- CreateIndex
CREATE INDEX "_AlbumToSong_B_index" ON "_AlbumToSong"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_NutzerToSong_AB_unique" ON "_NutzerToSong"("A", "B");

-- CreateIndex
CREATE INDEX "_NutzerToSong_B_index" ON "_NutzerToSong"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PlaylistToSong_AB_unique" ON "_PlaylistToSong"("A", "B");

-- CreateIndex
CREATE INDEX "_PlaylistToSong_B_index" ON "_PlaylistToSong"("B");
