const mongoose = require ("mongoose")
const Schema = mongoose.Schema;

const userScheme = new Schema(
    {
        pelicula: {
            type: String
        },
        // avatar: {
        //     type: String,
        //     default: "http:/image.com"
        // },
        // email: {
        //     type: String,
        //     // Unique no deja que se repita
        //     unique: true,
        //     // requerido / obligatorio
        //     required: true,
        // }
    }
)

// exportamos el modelo|estructura con el nombre "usuarioPrueba" con el formato indicado anteriormente
const datosUsuario = mongoose.model('datosUsuario', userScheme);
module.exports = datosUsuario;