const mongoose = require('../MongoDB')

const ModelMaquinas = new mongoose.Schema({
    imagens: String,
    nome: String,
    descricao: String,
    modelo: String,
    proprietario: String,
    status: String,
    nivel_saude: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Maquinas", ModelMaquinas);