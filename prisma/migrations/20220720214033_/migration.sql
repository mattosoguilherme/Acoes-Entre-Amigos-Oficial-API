/*
  Warnings:

  - You are about to alter the column `cota` on the `quotas` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - Changed the type of `promocoes` on the `raffles` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "quotas" ALTER COLUMN "cota" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "raffles" DROP COLUMN "promocoes",
ADD COLUMN     "promocoes" JSONB NOT NULL;
