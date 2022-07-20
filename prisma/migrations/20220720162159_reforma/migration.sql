/*
  Warnings:

  - You are about to drop the column `booking_requirements` on the `bookingRequirements` table. All the data in the column will be lost.
  - You are about to drop the column `category` on the `categories` table. All the data in the column will be lost.
  - You are about to drop the column `buyer` on the `quotas` table. All the data in the column will be lost.
  - You are about to drop the column `contact_buyer` on the `quotas` table. All the data in the column will be lost.
  - You are about to drop the column `email_buyer` on the `quotas` table. All the data in the column will be lost.
  - You are about to drop the column `quotas` on the `quotas` table. All the data in the column will be lost.
  - You are about to drop the column `raffleId` on the `quotas` table. All the data in the column will be lost.
  - You are about to drop the column `place` on the `rafflePlace` table. All the data in the column will be lost.
  - You are about to drop the column `type_display` on the `typeDisplay` table. All the data in the column will be lost.
  - You are about to drop the column `type_raffle` on the `typeRaffle` table. All the data in the column will be lost.
  - Added the required column `requisitos_reserva` to the `bookingRequirements` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoria` to the `categories` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cota` to the `quotas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `local` to the `rafflePlace` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipo_exibicao` to the `typeDisplay` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipo_sorteio` to the `typeRaffle` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "quotas" DROP CONSTRAINT "quotas_raffleId_fkey";

-- AlterTable
ALTER TABLE "bookingRequirements" DROP COLUMN "booking_requirements",
ADD COLUMN     "requisitos_reserva" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "categories" DROP COLUMN "category",
ADD COLUMN     "categoria" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "quotas" DROP COLUMN "buyer",
DROP COLUMN "contact_buyer",
DROP COLUMN "email_buyer",
DROP COLUMN "quotas",
DROP COLUMN "raffleId",
ADD COLUMN     "comprador" TEXT,
ADD COLUMN     "contato_comprador" TEXT,
ADD COLUMN     "cota" BIGINT NOT NULL,
ADD COLUMN     "email_comprador" TEXT,
ADD COLUMN     "rifaId" INTEGER;

-- AlterTable
ALTER TABLE "rafflePlace" DROP COLUMN "place",
ADD COLUMN     "local" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "typeDisplay" DROP COLUMN "type_display",
ADD COLUMN     "tipo_exibicao" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "typeRaffle" DROP COLUMN "type_raffle",
ADD COLUMN     "tipo_sorteio" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "quotas" ADD CONSTRAINT "quotas_rifaId_fkey" FOREIGN KEY ("rifaId") REFERENCES "raffles"("id") ON DELETE SET NULL ON UPDATE CASCADE;
