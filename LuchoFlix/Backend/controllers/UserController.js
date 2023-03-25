const User = require("../models/UserModel");

module.exports.addToLikedMovies = async (req, res) => {
    try {
        const {email, data} = req.body;
        const user = await User.findOne ({email});
        // si existe el usuario en la base de datos
        if (user) {
            const {likedMovies} = user;
            const movieAlreadyLiked = likedMovies.find(({id}) => (id === data.id));
            if (!movieAlreadyLiked) {
                await User.findByIdAndUpdate(
                    user._id,
                    {likedMovies: [...user.likedMovies, data],
                    },
                    {new : true }
                );
            } else return res.json ({ msg: "La película ya fue agregada a la lista con anterioridad"});
        } else await User.create ({email, likedMovies: [data]});
        return res.json ({msg: "la película fue agregada con exito"});
    } catch (error) {
        return res.json({msg:"Error agregando pelicula"})
    }
};

module.exports.getLikedMovies = async (req, res) => {
    try {
        const {email} = req.params;
        const user = await User.findOne({ email});
        if (user) {
            res.json({msg: "sucess", movies: user.likedMovies});
        } else return res.json ({msg: "El usuario brindado no funciona"});
    } catch (error) {
        return res.json({msg:"Error fetching pelicula"})

    }
};


module.exports.removeFromLikedMovies = async (req, res) => {
    try {
        const {email, movieId} = req.body;
        const user = await User.findOne ({email});
        // si existe el usuario en la base de datos
        if (user) {
            const {likedMovies} = user;
            const movieIndex = likedMovies.findIndex (({id}) => (id === movieId));
            if (!movieIndex) res.status(400).send({msg:"Película no encontrada"});
            likedMovies.splice(movieIndex,1);
                await User.findByIdAndUpdate(
                    user._id,
                    {likedMovies,
                    },
                    {new : true }
                );
                return res.json({msg: "Película eliminada", movies: likedMovies});
        }
    } catch (error) {
        console.log(error);
    }
};