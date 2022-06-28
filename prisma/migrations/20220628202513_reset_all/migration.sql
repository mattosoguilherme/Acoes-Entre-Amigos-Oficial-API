/*
  Warnings:

  - You are about to drop the column `description` on the `raffles` table. All the data in the column will be lost.
  - You are about to drop the column `frontCover` on the `raffles` table. All the data in the column will be lost.
  - You are about to drop the column `group_link` on the `raffles` table. All the data in the column will be lost.
  - You are about to drop the column `limit_participant_quota` on the `raffles` table. All the data in the column will be lost.
  - You are about to drop the column `place` on the `raffles` table. All the data in the column will be lost.
  - You are about to drop the column `price_quote` on the `raffles` table. All the data in the column will be lost.
  - You are about to drop the column `prizes` on the `raffles` table. All the data in the column will be lost.
  - You are about to drop the column `promotions` on the `raffles` table. All the data in the column will be lost.
  - You are about to drop the column `quota_payment_term` on the `raffles` table. All the data in the column will be lost.
  - You are about to drop the column `reservation_requirements` on the `raffles` table. All the data in the column will be lost.
  - You are about to drop the column `support_contact` on the `raffles` table. All the data in the column will be lost.
  - You are about to drop the column `term` on the `raffles` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `raffles` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `descricao` to the `raffles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `img_premio` to the `raffles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `limite_cota_user` to the `raffles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `link_grupo` to the `raffles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prazo_expiracao` to the `raffles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `preco_cota` to the `raffles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `telefone_suporte` to the `raffles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `titulo` to the `raffles` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "raffles" DROP COLUMN "description",
DROP COLUMN "frontCover",
DROP COLUMN "group_link",
DROP COLUMN "limit_participant_quota",
DROP COLUMN "place",
DROP COLUMN "price_quote",
DROP COLUMN "prizes",
DROP COLUMN "promotions",
DROP COLUMN "quota_payment_term",
DROP COLUMN "reservation_requirements",
DROP COLUMN "support_contact",
DROP COLUMN "term",
DROP COLUMN "title",
ADD COLUMN     "descricao" TEXT NOT NULL,
ADD COLUMN     "dia_sorteio" TIMESTAMP(3),
ADD COLUMN     "img_premio" TEXT NOT NULL,
ADD COLUMN     "limite_cota_user" INTEGER NOT NULL,
ADD COLUMN     "link_grupo" TEXT NOT NULL,
ADD COLUMN     "prazo_expiracao" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "preco_cota" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "premios" TEXT[],
ADD COLUMN     "promocoes" JSONB[],
ADD COLUMN     "telefone_suporte" TEXT NOT NULL,
ADD COLUMN     "titulo" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "typeRaffle" (
    "id" SERIAL NOT NULL,
    "type_raffle" TEXT NOT NULL,

    CONSTRAINT "typeRaffle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "typeDisplay" (
    "id" SERIAL NOT NULL,
    "type_display" TEXT NOT NULL,

    CONSTRAINT "typeDisplay_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bookingRequirements" (
    "id" SERIAL NOT NULL,
    "booking_requirements" TEXT NOT NULL,

    CONSTRAINT "bookingRequirements_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rafflePlace" (
    "id" SERIAL NOT NULL,
    "place" TEXT NOT NULL,

    CONSTRAINT "rafflePlace_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_RaffleToRafflePlace" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_RaffleToTypeRaffle" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_RaffleToTypeDisplay" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_BookingRequeriementsToRaffle" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_RaffleToRafflePlace_AB_unique" ON "_RaffleToRafflePlace"("A", "B");

-- CreateIndex
CREATE INDEX "_RaffleToRafflePlace_B_index" ON "_RaffleToRafflePlace"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_RaffleToTypeRaffle_AB_unique" ON "_RaffleToTypeRaffle"("A", "B");

-- CreateIndex
CREATE INDEX "_RaffleToTypeRaffle_B_index" ON "_RaffleToTypeRaffle"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_RaffleToTypeDisplay_AB_unique" ON "_RaffleToTypeDisplay"("A", "B");

-- CreateIndex
CREATE INDEX "_RaffleToTypeDisplay_B_index" ON "_RaffleToTypeDisplay"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_BookingRequeriementsToRaffle_AB_unique" ON "_BookingRequeriementsToRaffle"("A", "B");

-- CreateIndex
CREATE INDEX "_BookingRequeriementsToRaffle_B_index" ON "_BookingRequeriementsToRaffle"("B");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "_RaffleToRafflePlace" ADD CONSTRAINT "_RaffleToRafflePlace_A_fkey" FOREIGN KEY ("A") REFERENCES "raffles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RaffleToRafflePlace" ADD CONSTRAINT "_RaffleToRafflePlace_B_fkey" FOREIGN KEY ("B") REFERENCES "rafflePlace"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RaffleToTypeRaffle" ADD CONSTRAINT "_RaffleToTypeRaffle_A_fkey" FOREIGN KEY ("A") REFERENCES "raffles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RaffleToTypeRaffle" ADD CONSTRAINT "_RaffleToTypeRaffle_B_fkey" FOREIGN KEY ("B") REFERENCES "typeRaffle"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RaffleToTypeDisplay" ADD CONSTRAINT "_RaffleToTypeDisplay_A_fkey" FOREIGN KEY ("A") REFERENCES "raffles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RaffleToTypeDisplay" ADD CONSTRAINT "_RaffleToTypeDisplay_B_fkey" FOREIGN KEY ("B") REFERENCES "typeDisplay"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BookingRequeriementsToRaffle" ADD CONSTRAINT "_BookingRequeriementsToRaffle_A_fkey" FOREIGN KEY ("A") REFERENCES "bookingRequirements"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BookingRequeriementsToRaffle" ADD CONSTRAINT "_BookingRequeriementsToRaffle_B_fkey" FOREIGN KEY ("B") REFERENCES "raffles"("id") ON DELETE CASCADE ON UPDATE CASCADE;
