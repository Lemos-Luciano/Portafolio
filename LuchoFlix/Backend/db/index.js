const mongoose = require("mongoose");

// Conectar con MongoDB
const user = process.env.USER;
const password = process.env.PASSWORD;
const URI = `mongodb+srv://${user}:${password}@luchoflix.ai7karq.mongodb.net/?retryWrites=true&w=majority`;


const dbConnect = (app) => {
    
    mongoose
        .connect(URI,
        { useNewUrlParser: true, useUnifiedTopology: true 
        })
        .then(() => {
            const PORT = process.env.PORT;
            console.log("Servidor conectado con MongoDB");
            // Colocamos dentro el listen ya que debe conectarse con mongoDB primero
            app.listen(PORT,console.log(`Servido levantado en el puerto ${PORT}`));
        })
        .catch ((err) => console.log(err))
}

// module palabra reservada de nodjs muestra todo lo que TODO este modulo (en este caso indexedDB.js) tiene con sus propiedades 
// una de las funciones es exports
// console.log({module});

module.exports = dbConnect