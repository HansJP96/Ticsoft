CREATE TABLE IF NOT EXISTS Gestion_roles_usuario (
    `ID_USUARIO` VARCHAR(7) CHARACTER SET utf8,
    `NOMBRE_USUARIO` VARCHAR(35) CHARACTER SET utf8,
    `ROL_USUARIO` VARCHAR(17) CHARACTER SET utf8,
    `NIVEL_ACCESO` VARCHAR(11) CHARACTER SET utf8
);
INSERT INTO Gestion_roles_usuario VALUES
    ('USER001','Andrea Chávez Heredia','Vendedor','Autorizado'),
    ('USER002','Ruth Silvana Cortés Lagunes','Vendedor','Autorizado'),
    ('USER003','Ariana de Jesús Ramos','Vendedor','Autorizado'),
    ('USER004','Luis Felipe Delgado Barrón','Vendedor','Autorizado'),
    ('USER005','Hansel Andres Espejo Ramos','Vendedor','Autorizado'),
    ('USER006','Aniyensy Sarai Flores Aguilar','Administrador','Autorizado'),
    ('USER007','Karla Paulette Flores Silva','Ejecutivo','Restringido'),
    ('USER008','Montserrat Carolina García Arreguín','Operario','Restringido'),
    ('USER009','Lisset Vianey García Orozco','Director','Autorizado'),
    ('USER010','José Ignacio Gómez Vargas','Gerente Comercial','Autorizado');
