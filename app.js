const express = require('express')
const Sequelize = require('sequelize')
const app = express()

//Definicion parametros de conexion usando sequelize
const sequelize = new Sequelize('proyectoticsoft','root','',{
    host:'localhost',
    dialect: 'mysql'

})

//Definicion del modelo
const productosModel = sequelize.define('productos',{
    "idproducto": {type:Sequelize.STRING, primaryKey:true},
    "NombreProducto": Sequelize.STRING,
    "ValorUnitarioProducto": Sequelize.INTEGER,
    "DescripcionProducto": Sequelize.STRING,
    "EstadoProducto": Sequelize.STRING

})

//Coneccion y autenticacion con la BD usando las promesas
sequelize.authenticate()
    .then(()=>{ //promesa
        console.log('CONEXION A LA BASE DE DATOS OK')
    })
    .catch( error =>{
        console.log('EL ERROR DE CONEXION ES: '+error)
    })

productosModel.findAll({attributes:['NombreProducto','ValorUnitarioProducto']})
    .then(productos =>{//muestra la promesa
        console.log(productos)
    })
    .catch(error =>{
        const resultados = JSON.stringify(productos) //Objeto o Valor JavaScript en una cadena de texto JSON
        console.log(error)
    })


app.listen(4000, ()=>{
    console.log('SERVER UP en http:localhost:4000')

})
