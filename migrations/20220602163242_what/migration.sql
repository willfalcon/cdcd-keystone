/*
  Warnings:

  - You are about to drop the `Task` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Task" DROP CONSTRAINT "Task_assignedTo_fkey";

-- DropTable
DROP TABLE "Task";

-- CreateTable
CREATE TABLE "Site" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL DEFAULT E'',
    "url" TEXT NOT NULL DEFAULT E'',
    "frontendUrl" TEXT NOT NULL DEFAULT E'',
    "flagTime" TEXT NOT NULL DEFAULT E'',

    CONSTRAINT "Site_pkey" PRIMARY KEY ("id")
);
