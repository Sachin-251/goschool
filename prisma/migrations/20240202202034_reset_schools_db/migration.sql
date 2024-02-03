-- CreateTable
CREATE TABLE `schools` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `address` VARCHAR(300) NOT NULL,
    `city` VARCHAR(30) NOT NULL,
    `state` VARCHAR(30) NOT NULL,
    `email` VARCHAR(50) NOT NULL,
    `phone` BIGINT NOT NULL,
    `image` VARCHAR(150) NOT NULL,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
