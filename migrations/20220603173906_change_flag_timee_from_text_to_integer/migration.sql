/*
  Warnings:

  - The `flagTime` column on the `Site` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Site" DROP COLUMN "flagTime",
ADD COLUMN     "flagTime" INTEGER;
