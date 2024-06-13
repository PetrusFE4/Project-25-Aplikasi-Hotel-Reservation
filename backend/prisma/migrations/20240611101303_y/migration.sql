-- CreateTable
CREATE TABLE `tbl_users` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(100) NOT NULL,
    `role` ENUM('USER', 'ADMIN') NOT NULL DEFAULT 'USER',
    `creation_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `archived` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `tbl_users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_hotels` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `place` VARCHAR(191) NOT NULL,
    `distance` DOUBLE NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `offer` VARCHAR(191) NOT NULL,
    `roomDetails` VARCHAR(191) NOT NULL,
    `bedDetails` VARCHAR(191) NOT NULL,
    `roomLeft` INTEGER NOT NULL,
    `rating` DOUBLE NOT NULL,
    `reviews` INTEGER NOT NULL,
    `night` INTEGER NOT NULL,
    `adult` INTEGER NOT NULL,
    `children` INTEGER NOT NULL,
    `price` INTEGER NOT NULL,

    UNIQUE INDEX `tbl_hotels_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_hotel_images` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `imgUrl` VARCHAR(191) NOT NULL,
    `hotelId` INTEGER NOT NULL,

    INDEX `tbl_hotel_images_hotelId_idx`(`hotelId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_hotel_locations` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `lat` DOUBLE NOT NULL,
    `lng` DOUBLE NOT NULL,
    `hotelId` INTEGER NOT NULL,

    UNIQUE INDEX `tbl_hotel_locations_hotelId_key`(`hotelId`),
    INDEX `tbl_hotel_locations_hotelId_idx`(`hotelId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_featured_cities` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `img` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `desc` VARCHAR(191) NOT NULL,
    `hotels` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `tbl_hotel_images` ADD CONSTRAINT `tbl_hotel_images_hotelId_fkey` FOREIGN KEY (`hotelId`) REFERENCES `tbl_hotels`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tbl_hotel_locations` ADD CONSTRAINT `tbl_hotel_locations_hotelId_fkey` FOREIGN KEY (`hotelId`) REFERENCES `tbl_hotels`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
