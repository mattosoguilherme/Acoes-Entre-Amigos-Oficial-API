/*
  Warnings:

  - You are about to drop the `_BookingRequeriementsToRaffle` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_BookingRequeriementsToRaffle" DROP CONSTRAINT "_BookingRequeriementsToRaffle_A_fkey";

-- DropForeignKey
ALTER TABLE "_BookingRequeriementsToRaffle" DROP CONSTRAINT "_BookingRequeriementsToRaffle_B_fkey";

-- DropTable
DROP TABLE "_BookingRequeriementsToRaffle";

-- CreateTable
CREATE TABLE "_BookingRequirementsToRaffle" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_BookingRequirementsToRaffle_AB_unique" ON "_BookingRequirementsToRaffle"("A", "B");

-- CreateIndex
CREATE INDEX "_BookingRequirementsToRaffle_B_index" ON "_BookingRequirementsToRaffle"("B");

-- AddForeignKey
ALTER TABLE "_BookingRequirementsToRaffle" ADD CONSTRAINT "_BookingRequirementsToRaffle_A_fkey" FOREIGN KEY ("A") REFERENCES "bookingRequirements"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BookingRequirementsToRaffle" ADD CONSTRAINT "_BookingRequirementsToRaffle_B_fkey" FOREIGN KEY ("B") REFERENCES "raffles"("id") ON DELETE CASCADE ON UPDATE CASCADE;
