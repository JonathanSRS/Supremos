const mongoose = require('../MongoDB')

const ModelFuncionarios = new mongoose.Schema({
    nome: String,
    cargo: String,
    idade: Int32Array,
    id_empresa: {
        type: mongoose.Types.ObjectId,
        ref: "empresas"
    }
});

module.exports = mongoose.model("funcionarios", ModelFuncionarios);