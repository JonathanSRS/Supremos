const mongoose = require('../MongoDB')

const ModelUsuarios = new mongoose.Schema({
    nome: String,
    email: String,
    senha: String,
    dataCriacao: {
        type: Date,
        default: Date.now
    },
    dataAtualizacao: Date
});


module.exports = mongoose.model("usuarios", ModelUsuarios);