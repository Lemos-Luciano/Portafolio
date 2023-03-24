const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        max: 50,
    },
    likedMovies: Array,
});

// module.exports = mongoose.model("users", userSchema)

const user =  mongoose.model("PerfilesUsuarios", userSchema)
// const user =  mongoose.model("PerfilesUsuarios", userSchema, "PerfilesUsuarioss") ("Nombre del modelo", Que esquema tiene que seguir, Nombre de la coleccion (por defecto pone el nombre del modelo con una s))

module.exports =  user