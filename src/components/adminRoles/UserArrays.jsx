import LoginVendor from '../adminRoles/LoginVendor';
import LoginAdmin from '../adminRoles/LoginAdmin';
import MasterAdmin from '../adminRoles/MasterAdmin';
import RegistrarProducto from '../productos/RegistrarProducto';
import ActualizarProducto from '../productos/ActualizarProducto';
import RegistrarVenta from '../ventas/RegistrarVenta';
import ActualizarVenta from '../ventas/ActualizarVenta';

export const roles = () => {

    const AdminTools = [
        ["Home", [["", "Home", LoginAdmin]]],
        ["Productos", [["RegistrarProducto", "Registrar Producto",RegistrarProducto], ["ActualizarProducto", "Actualizar Producto",ActualizarProducto]]],
        ["Ventas", [["RegistrarVenta", "Registrar Ventas", RegistrarVenta], ["ActualizarVenta", "Actualizar Ventas", ActualizarVenta]]]
    ]
    
    const VendorTools = [
        ["Home", [["", "Home", LoginVendor]]],
        ["Ventas", [["RegistrarVenta", "Registrar Ventas", RegistrarVenta], ["ActualizarVenta", "Actualizar Ventas", ActualizarVenta]]]
    ]

    const Master = [
        ["Home", [["", "Control de Usuarios", MasterAdmin]]]
    ]

    return [["Administrador", AdminTools], ["Vendedor", VendorTools],["Master", Master]]
}



