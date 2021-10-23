import React from 'react'

import '../cssStyles/general/Css.css'
import '../cssStyles/cardboards/card.css'

import Container from 'react-bootstrap/Container';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import {
    useHistory
} from "react-router-dom";


const LoginAdmin = ({ ...props }) => {

    let history = useHistory()


    const addProduct = () => {
        history.push("RegistrarProducto")
    }

    const updateProduct = () => {
        history.push("ActualizarProducto")
    }

    const addVenta = () => {
        history.push("RegistrarVenta")
    }

    const updateVenta = () => {
        history.push("ActualizarVenta")
    }

    return (
        <Container className="contenedor2" >
            <Card className="cardboard1" border="dark" >
                <Card.Header>Registrar Producto</Card.Header>
                <Card.Body>
                    <Card.Text>
                        Se podra registrar un nuevo producto.
                    </Card.Text>
                </Card.Body>
                <Card.Body>
                    <Button onClick={addProduct} variant="outline-dark">Acceder</Button>
                </Card.Body>

            </Card>

            <Card className="cardboard1" border="dark" >
                <Card.Header>Actualizar Productos</Card.Header>
                <Card.Body>
                    <Card.Text>
                        Se podra buscar, listar y actualizar los productos.
                    </Card.Text>
                </Card.Body>
                <Card.Body>
                    <Button onClick={updateProduct} variant="outline-dark">Acceder</Button>
                </Card.Body>
            </Card>

            <Card className="cardboard1" border="dark">
                <Card.Header>Registrar Venta</Card.Header>
                <Card.Body>
                    <Card.Text>
                        Se podra registrar una venta.
                    </Card.Text>
                </Card.Body>
                <Card.Body>
                    <Button onClick={addVenta} variant="outline-dark">Acceder</Button>
                </Card.Body>

            </Card>

            <Card className="cardboard1" border="dark" >
                <Card.Header>Actualizar Ventas</Card.Header>
                <Card.Body>
                    <Card.Text>
                        Se podra buscar, listar y actualizar las ventas.
                    </Card.Text>
                </Card.Body>
                <Card.Body>
                    <Button onClick={updateVenta} variant="outline-dark">Acceder</Button>
                </Card.Body>
            </Card>

        </Container>
    )
}

export default LoginAdmin;