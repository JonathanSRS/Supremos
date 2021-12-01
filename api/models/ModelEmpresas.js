const mongoose = require('../MongoDB')

const ModelEmpresas = new mongoose.Schema({
    nome: {
        $type: String
    },
    endereco: {
        $type: String,
    },
    id_usuario: {
        $type: mongoose.Schema.Types.ObjectId,
        ref: 'usuarios',
        // required: true,
    },
    dataCriacao: {
        $type: Date,
        default: Date.now,
    },
    dataAtualizacao: Date
},{typeKey: '$type' });

module.exports = mongoose.model("empresas", ModelEmpresas);