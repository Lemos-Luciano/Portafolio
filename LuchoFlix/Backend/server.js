require('dotenv').config();
const express = require("express");
// Intercambio de Recursos de Origen Cruzado (CORS)
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/UserRoutes");


const app = express();

// Permite todo tipo de conexion cruzada
app.use(cors());
// Solo mirará las peticiones donde el Content-Type header sea del tipo aclarado (en este caso .json)
app.use(express.json());

// Conectar con MongoDB
const PORT = process.env.PORT
const user = process.env.USER;
const password = process.env.PASSWORD;
const URI = `mongodb+srv://${user}:${password}@luchoflix.ai7karq.mongodb.net/?retryWrites=true&w=majority`;
mongoose.connect(URI,
    { useNewUrlParser: true, useUnifiedTopology: true }
    ).then(() => {
        console.log("Servidor conectado con MongoDB");
        // Colocamos dentro el listen ya que debe conectarse con mongoDB primero
        app.listen(PORT,console.log(`Servido levantado en el puerto ${PORT}`));
    })
    
    
app.use("/api/user", userRoutes);