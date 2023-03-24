const express = require ("express");
const router = express.Router();

const controlador = require ("../controllers/PruebaController")
const datosUsuario = require ("../models/PruebaModel")
const path = "prueba"

// Si llamo a la ruta path (en este caso prueba) obtengo
router.get( `/${path}`, async (req, res) => {
    try {
        const arrayDatosUsuario = await datosUsuario.find()
        console.log(arrayDatosUsuario);
        res.send(arrayDatosUsuario)
    } catch (error) {
        console.log(error);
    }
}
    // controlador.getData
    // para no copiar aqui la funcion entera se hace separado en la carpeta de controllers
    // (req, res) => {
    //     res.send({ a: 1})}
)

// Lo enviaremos al server
module.exports = router;