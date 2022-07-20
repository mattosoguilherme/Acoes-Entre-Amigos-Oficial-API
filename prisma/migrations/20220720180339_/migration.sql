/*
  Warnings:

  - You are about to drop the `_RaffleToRafflePlace` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `rafflePlace` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `local` to the `raffles` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_RaffleToRafflePlace" DROP CONSTRAINT "_RaffleToRafflePlace_A_fkey";

-- DropForeignKey
ALTER TABLE "_RaffleToRafflePlace" DROP CONSTRAINT "_RaffleToRafflePlace_B_fkey";

-- AlterTable
ALTER TABLE "raffles" ADD COLUMN     "local" TEXT NOT NULL;

-- DropTable
DROP TABLE "_RaffleToRafflePlace";

-- DropTable
DROP TABLE "rafflePlace";
