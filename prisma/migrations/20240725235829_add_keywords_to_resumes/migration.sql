/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `BaseResume` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `keywords` to the `BaseResume` table without a default value. This is not possible if the table is not empty.
  - Added the required column `keywords` to the `CustomizedResume` table without a default value. This is not possible if the table is not empty.
  - Added the required column `keywords` to the `JobDescription` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BaseResume" ADD COLUMN     "keywords" JSONB NOT NULL;

-- AlterTable
ALTER TABLE "CustomizedResume" ADD COLUMN     "keywords" JSONB NOT NULL;

-- AlterTable
ALTER TABLE "JobDescription" ADD COLUMN     "keywords" JSONB NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "BaseResume_userId_key" ON "BaseResume"("userId");
