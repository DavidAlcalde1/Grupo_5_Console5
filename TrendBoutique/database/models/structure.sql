CREATE SCHEMA IF NOT EXISTS `trendboutique` DEFAULT CHARACTER SET utf8 
CREATE TABLE IF NOT EXISTS `trendboutique`.`products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(100) NOT NULL,
  `price` DECIMAL(6) NOT NULL,
  `quantyty` INT NOT NULL,
  `image` VARCHAR(45) NOT NULL,
  `size` VARCHAR(3) NOT NULL,
  `color` VARCHAR(45) NOT NULL,
  `category` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB

CREATE TABLE IF NOT EXISTS `trendboutique`.`users` (
  `idusers` INT NOT NULL,
  `first_name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `gender` VARCHAR(45) NOT NULL,
  `telefono` INT NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `role` BINARY(1) NOT NULL,
  `country` VARCHAR(45) NOT NULL,
  `image` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idusers`, `email`))
ENGINE = InnoDB