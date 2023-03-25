const { addToLikedMovies, getLikedMovies, removeFromLikedMovies } = require("../controllers/UserController");

const router = require ("express").Router();

router.post("/add", addToLikedMovies);
router.get("/liked/:email", getLikedMovies);
router.put("/delete", removeFromLikedMovies);

// La ruta se importa a server.js
module.exports = router;