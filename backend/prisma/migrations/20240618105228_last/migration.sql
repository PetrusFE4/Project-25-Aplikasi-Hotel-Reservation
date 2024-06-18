/*
  Warnings:

  - Added the required column `countryImg` to the `tbl_featured_cities` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hotels` to the `tbl_featured_cities` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rating` to the `tbl_featured_cities` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `tbl_featured_cities` ADD COLUMN `countryImg` VARCHAR(191) NOT NULL,
    ADD COLUMN `hotels` INTEGER NOT NULL,
    ADD COLUMN `rating` INTEGER NOT NULL;
