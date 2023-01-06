-- CreateEnum
CREATE TYPE "BreweryType" AS ENUM ('micro', 'nano', 'regional', 'brewpub', 'large', 'planning', 'bar', 'contract', 'proprietor', 'closed');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Brewery" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "brewery_type" "BreweryType" NOT NULL,
    "street" TEXT NOT NULL,
    "address2" TEXT,
    "address3" TEXT,
    "city" TEXT NOT NULL,
    "state" TEXT,
    "county_province" TEXT,
    "postal_code" TEXT NOT NULL,
    "website" TEXT,
    "country" TEXT NOT NULL,
    "longitude" TEXT NOT NULL,
    "latitude" TEXT NOT NULL,
    "phone" TEXT,

    CONSTRAINT "Brewery_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_BreweryToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_BreweryToUser_AB_unique" ON "_BreweryToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_BreweryToUser_B_index" ON "_BreweryToUser"("B");

-- AddForeignKey
ALTER TABLE "_BreweryToUser" ADD CONSTRAINT "_BreweryToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Brewery"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BreweryToUser" ADD CONSTRAINT "_BreweryToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
