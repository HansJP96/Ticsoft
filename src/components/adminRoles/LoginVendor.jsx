import React from 'react'

import '../cssStyles/general/Css.css'
import '../cssStyles/cardboards/card.css'


import Container from 'react-bootstrap/Container';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import {
    useHistory
} from "react-router-dom";

const LoginVendor = ({ ...props }) => {

    let history = useHistory()


    const addVenta = () => {
        history.push("RegistrarVenta")
    }

    const updateVenta = () => {
        history.push("ActualizarVenta")
    }

    return (
        <Container className="contenedor2">

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

export default LoginVendor;
