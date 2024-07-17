/*
  Warnings:

  - You are about to drop the column `description` on the `Sponsor` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Sponsor` table. All the data in the column will be lost.
  - Added the required column `captureUrl` to the `Sponsor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `domaine` to the `Sponsor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Sponsor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstName` to the `Sponsor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `Sponsor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `Sponsor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `presentation` to the `Sponsor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reference` to the `Sponsor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Sponsor" DROP COLUMN "description",
DROP COLUMN "userId",
ADD COLUMN     "captureUrl" TEXT NOT NULL,
ADD COLUMN     "domaine" TEXT NOT NULL,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "firstName" TEXT NOT NULL,
ADD COLUMN     "isActivated" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "isVisible" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "lastName" TEXT NOT NULL,
ADD COLUMN     "phone" INTEGER NOT NULL,
ADD COLUMN     "presentation" TEXT NOT NULL,
ADD COLUMN     "reference" TEXT NOT NULL;
