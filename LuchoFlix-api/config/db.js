const mongoose = require("mongoose");

module.exports = () => {
  // Conectar con MongoDB
  const user = "usuarioPublico";
  const password = "XtHXmmJmKL3R6xTO";
  const URI = `mongodb+srv://${user}:${password}@luchoflix.ai7karq.mongodb.net/?retryWrites=true&w=majority`;

  const conectarMongo = () => {
    mongoose.connect(
      URI,
      { useNewUrlParser: true, useUnifiedTopology: true }
        .then(() => console.log("conectado con la base de datos"))
        .catch((e) => console.log(e))
    );
  };
  conectarMongo();
};


