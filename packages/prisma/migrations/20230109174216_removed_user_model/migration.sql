/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_BreweryToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_BreweryToUser" DROP CONSTRAINT "_BreweryToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_BreweryToUser" DROP CONSTRAINT "_BreweryToUser_B_fkey";

-- DropTable
DROP TABLE "User";

-- DropTable
DROP TABLE "_BreweryToUser";
