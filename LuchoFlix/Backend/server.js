require('dotenv').config();
const express = require("express");
// Como se llama index.js no hace falta aclarar el nombre del database
const dbConnect = require("./db");
// Intercambio de Recursos de Origen Cruzado (CORS)
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes");

const app = express();

app.get ("/", (req, res) => {
    console.log("peticion recibida")
    res.status(200).send('<h1>Hola mundo!</h1>')
})

dbConnect(app);

// Permite todo tipo de conexion cruzada. origin: true = cualquiera se puede conectar a nuestro backend
app.use(cors({ origin: true }));
// Solo mirará las peticiones donde el Content-Type header sea del tipo aclarado (en este caso .json)
app.use(express.json());

    
    
app.use("/api/user", userRoutes);