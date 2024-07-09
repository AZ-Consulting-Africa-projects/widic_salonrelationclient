/*
  Warnings:

  - Added the required column `capture` to the `Participant` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Participant" ADD COLUMN     "capture" TEXT NOT NULL;
