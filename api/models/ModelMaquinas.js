const mongoose = require('../MongoDB')

const ModelMaquinas = new mongoose.Schema({
    imagens: String,
    nome: String,
    descricao: String,
    modelo: String,
    proprietario: String,
    status: String,
    nivel_saude: String,
    id_unidade: {
        type:  mongoose.Types.ObjectId,
        ref: "unidades"
    },
    dataCriacao: {
        type: Date,
        default: Date.now
    },
    dataAtualizacao: Date
});

module.exports = mongoose.model("Maquinas", ModelMaquinas);