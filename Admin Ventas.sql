CREATE TABLE IF NOT EXISTS Admin_Ventas (
    `ID_VENTA` INT,
    `FECHA_VENTA` DATETIME,
    `DESCRIPCI_N_VENTA` VARCHAR(23) CHARACTER SET utf8,
    `CANTIDAD` INT,
    `VALOR_UNITARIO` INT,
    `VALOR_TOTAL` INT,
    `FECHA_PAGO` DATETIME,
    `ID_USUARIO` VARCHAR(7) CHARACTER SET utf8,
    `NOMBRE_USUARIO` VARCHAR(27) CHARACTER SET utf8,
    `ROL_USUARIO` VARCHAR(8) CHARACTER SET utf8,
    `ESTADO_VENTA` VARCHAR(10) CHARACTER SET utf8
);
INSERT INTO Admin_Ventas VALUES
    (1,'2021-02-23 00:00:00','XIAOMI REDMI NOTE 9 LTE',2,569149,1138298,'2021-04-24 00:00:00','USER001','Andrea Chávez Heredia','Vendedor','En proceso'),
    (2,'2021-12-05 00:00:00','Xiaomi POCO X3 Pro',1,670364,670364,'2022-02-03 00:00:00','USER002','Ruth Silvana Cortés Lagunes','Vendedor','Cancelado'),
    (3,'2021-04-06 00:00:00','OnePlus Nord 2',3,810071,2430213,'2021-06-05 00:00:00','USER003','Ariana de Jesús Ramos','Vendedor','Completado'),
    (4,'2021-03-26 00:00:00','Xiaomi POCO F3',4,557001,2228004,'2021-05-25 00:00:00','USER004','Luis Felipe Delgado Barrón','Vendedor','Completado'),
    (5,'2021-08-12 00:00:00','OnePlus Nord CE',2,917536,1835072,'2021-10-11 00:00:00','USER005','Hansel Andres Espejo Ramos','Vendedor','Cancelado'),
    (6,'2021-08-09 00:00:00','OPPO A73 5G',1,670263,670263,'2021-10-08 00:00:00','USER005','Hansel Andres Espejo Ramos','Vendedor','En proceso'),
    (7,'2021-04-18 00:00:00','Samsung Galaxy A52',2,558134,1116268,'2021-06-17 00:00:00','USER004','Luis Felipe Delgado Barrón','Vendedor','En proceso'),
    (8,'2021-11-29 00:00:00','Realme 8 Pro',1,716641,716641,'2022-01-28 00:00:00','USER003','Ariana de Jesús Ramos','Vendedor','Cancelado'),
    (9,'2021-03-10 00:00:00','Realme 7',4,532470,2129880,'2021-05-09 00:00:00','USER002','Ruth Silvana Cortés Lagunes','Vendedor','Completado'),
    (10,'2021-06-07 00:00:00','TCL 10L',3,679731,2039193,'2021-08-06 00:00:00','USER001','Andrea Chávez Heredia','Vendedor','Completado');
