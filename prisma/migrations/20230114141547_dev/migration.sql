/*
  Warnings:

  - Made the column `userId` on table `Monitoring` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `sign` to the `Session` table without a default value. This is not possible if the table is not empty.
  - Made the column `userId` on table `Session` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Monitoring" DROP CONSTRAINT "Monitoring_userId_fkey";

-- DropForeignKey
ALTER TABLE "Session" DROP CONSTRAINT "Session_userId_fkey";

-- AlterTable
ALTER TABLE "Monitoring" ALTER COLUMN "userId" SET NOT NULL,
ALTER COLUMN "detail" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Session" ADD COLUMN     "sign" TEXT NOT NULL,
ALTER COLUMN "userId" SET NOT NULL,
ALTER COLUMN "ip" DROP NOT NULL,
ALTER COLUMN "location" DROP NOT NULL,
ALTER COLUMN "device" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Monitoring" ADD CONSTRAINT "Monitoring_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
