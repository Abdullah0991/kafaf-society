-- CreateTable
CREATE TABLE `boxes` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `cash` INTEGER NOT NULL DEFAULT 0,
    `isActive` BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `carousels` (
    `id` VARCHAR(191) NOT NULL,
    `type` INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `carousel_images` (
    `id` VARCHAR(191) NOT NULL,
    `carouselId` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `carousel_images` ADD CONSTRAINT `carousel_images_carouselId_fkey` FOREIGN KEY (`carouselId`) REFERENCES `carousels`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
