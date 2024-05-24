/*
  Warnings:

  - The primary key for the `tasks` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `taskNum` to the `tasks` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `tasks` DROP PRIMARY KEY,
    ADD COLUMN `taskNum` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`taskNum`);
