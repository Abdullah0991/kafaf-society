-- AlterTable
ALTER TABLE `campaigns` ADD COLUMN `mediaUrl` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `services` ADD COLUMN `image` VARCHAR(191) NULL,
    MODIFY `mediaUrl` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `tasks` ADD COLUMN `type` INTEGER NOT NULL DEFAULT 0;
