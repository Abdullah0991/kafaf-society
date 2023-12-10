-- CreateTable
CREATE TABLE `statistics` (
    `id` VARCHAR(191) NOT NULL,
    `medical` INTEGER NOT NULL DEFAULT 0,
    `food` INTEGER NOT NULL DEFAULT 0,
    `activity` INTEGER NOT NULL DEFAULT 0,
    `logistic` INTEGER NOT NULL DEFAULT 0,
    `clothes` INTEGER NOT NULL DEFAULT 0,
    `emergency` INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
