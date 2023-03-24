const User = require("../models/UserModel");

module.exports.addToLikedMovies = async (req, res) => {
    try {
        const {email, data} = req.body;
        const user = await User.findOnde ({email});
        if (user) {
            const { likedMovies} = user;
            const movieAlreadyLiked = likedMovies.find (({id}) => (id = data.id));
            if (!movieAlreadyLiked) {
                await User.findByIdAndUpdate(user._id, {
                    likedMovies: [...user.likedMovies, data],
                },
                {new : true}
                );
            } else return res.json({msg: "Pelicula ya fue agregado con anterioridad a la lista"});
        } else await User.create ({email, likedMovies: [data] });
        return res.json({msg: "La pelicula fue agregada con exito"});
    } catch (error) {
        console.log(error);
        return res.json({msg: "Error agregando pelicula"});
    }
};