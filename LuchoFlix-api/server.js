const express = require("express");
// Intercambio de Recursos de Origen Cruzado (CORS)
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/UserRoutes");
const app = express();
const puerto = 5000;

app.use(cors());
// Solo mirará las peticiones donde el Content-Type header sea del tipo aclarado (en este caso .json)
app.use(express.json());


// Conectar con mongoo
const user = "usuarioPublico";
const password = "XtHXmmJmKL3R6xTO";
const URI = `mongodb+srv://${user}:${password}@luchoflix.ai7karq.mongodb.net/?retryWrites=true&w=majority`;
mongoose.connect(URI,
    { useNewUrlParser: true, useUnifiedTopology: true }
    ).then(() => {
        console.log("Servidor conectado con MongoDB");
    })


app.use ("/api/users", userRoutes);

app.listen(puerto, console.log(`Servidor levantado en el puerto ${puerto}`));

