CREATE TABLE `receta` (
  `id` int(11) NOT NULL,
  `nombre` varchar(80) NOT NULL,
  `imagen` varchar(512) DEFAULT NULL,
  `ingredientes` text(1000) DEFAULT NULL,
  `preparacion` text(1000) DEFAULT NULL,
  `handle` varchar(32) DEFAULT NULL,
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

CREATE TABLE `ingredientes` (
  `id` int(11) NOT NULL,
  `cantidad` varchar(80) NOT NULL,
  `nombre` varchar(80) NOT NULL,
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;