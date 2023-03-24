const model = require ("../models/PruebaModel")

exports.getData = (req, res) => {
    // res.send({ data: "esto viene desde la prueba controller probando"})
    // console.log("Servidor funcionando desde el controller");
    // Busca en la base de datos y devuelve el error o los documentos encontrados dentro de los corchetes se puede enviar la query (requisitos)
    model.find({}, (err, docs) => {
        res.send({
            docs
        })
    })
}