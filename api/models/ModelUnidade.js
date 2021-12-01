const mongoose = require('../MongoDB')

const ModelUnidades = new mongoose.Schema({
    endereco: String,
    id_empresa: {
        type: mongoose.Types.ObjectId,
        ref: "empresas"
    },
    maquinas: [],
    dataCriacao: {
        type: Date,
        default: Date.now
    },
    dataAtualizacao: Date
});

module.exports = mongoose.model("unidades", ModelUnidades);