CREATE TABLE IF NOT EXISTS Gesti_n_vendedores (
    `ID_USUARIO` VARCHAR(7) CHARACTER SET utf8,
    `NOMBRE_USUARIO` VARCHAR(27) CHARACTER SET utf8,
    `ROL_USUARIO` VARCHAR(8) CHARACTER SET utf8,
    `ESPECIALIDAD` VARCHAR(18) CHARACTER SET utf8,
    `NUM_CELULAR` BIGINT,
    `FECHA_INGRESO` DATETIME
);
INSERT INTO Gesti_n_vendedores VALUES
    ('USER001','Andrea Chávez Heredia','Vendedor','Asesor I',3208113172,'2019-12-14 00:00:00'),
    ('USER002','Ruth Silvana Cortés Lagunes','Vendedor','Asesor II',3156576494,'2018-04-17 00:00:00'),
    ('USER003','Ariana de Jesús Ramos','Vendedor','Auxiliar ventas',3117983673,'2018-06-06 00:00:00'),
    ('USER004','Luis Felipe Delgado Barrón','Vendedor','Auxiliar logístico',3169653160,'2021-11-10 00:00:00'),
    ('USER005','Hansel Andres Espejo Ramos','Vendedor','Auxiliar despacho',3053446563,'2020-02-08 00:00:00');
