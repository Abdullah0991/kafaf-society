/*
  Warnings:

  - You are about to drop the `carousel_images` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `carousel_images` DROP FOREIGN KEY `carousel_images_carouselId_fkey`;

-- DropIndex
DROP INDEX `carousels_type_key` ON `carousels`;

-- AlterTable
ALTER TABLE `carousels` ALTER COLUMN `type` DROP DEFAULT;

-- DropTable
DROP TABLE `carousel_images`;
