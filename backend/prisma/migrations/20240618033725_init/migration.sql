-- CreateTable
CREATE TABLE `tbl_users` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(100) NOT NULL,
    `role` ENUM('USER', 'ADMIN') NOT NULL DEFAULT 'USER',
    `creation_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `tbl_users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_hotels` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `place` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `offer` VARCHAR(191) NOT NULL,
    `roomDetails` VARCHAR(191) NOT NULL,
    `bedDetails` VARCHAR(191) NOT NULL,
    `roomLeft` INTEGER NOT NULL,
    `rating` DOUBLE NOT NULL,
    `reviewsCount` INTEGER NOT NULL DEFAULT 0,
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
    `hotelId` VARCHAR(191) NOT NULL,

    INDEX `tbl_hotel_images_hotelId_idx`(`hotelId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_featured_cities` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `img` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `desc` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_bookings` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `hotelId` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `startDate` DATETIME(3) NOT NULL,
    `endDate` DATETIME(3) NOT NULL,
    `guests` INTEGER NOT NULL,
    `totalPrice` INTEGER NOT NULL,
    `checkInAt` DATETIME(3) NULL,
    `checkOutAt` DATETIME(3) NULL,
    `creation_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_reviews` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `hotelId` VARCHAR(191) NOT NULL,
    `bookingId` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `rating` TINYINT NOT NULL,
    `comment` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `tbl_hotel_images` ADD CONSTRAINT `tbl_hotel_images_hotelId_fkey` FOREIGN KEY (`hotelId`) REFERENCES `tbl_hotels`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tbl_bookings` ADD CONSTRAINT `tbl_bookings_hotelId_fkey` FOREIGN KEY (`hotelId`) REFERENCES `tbl_hotels`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tbl_reviews` ADD CONSTRAINT `tbl_reviews_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `tbl_users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tbl_reviews` ADD CONSTRAINT `tbl_reviews_hotelId_fkey` FOREIGN KEY (`hotelId`) REFERENCES `tbl_hotels`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tbl_reviews` ADD CONSTRAINT `tbl_reviews_bookingId_fkey` FOREIGN KEY (`bookingId`) REFERENCES `tbl_bookings`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
