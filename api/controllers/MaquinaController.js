const database = require('../models/ModelMaquinas')

class MaquinaController{
    constructor({imagens, nome, modelo, descricao, proprietario, status, nivel_saude, createdAt}){
        this.imagens = imagens;
        this.nome = nome;
        this.modelo = modelo;
        this.descricao = descricao;
        this.proprietario = proprietario;
        this.status = status;
        this.nivel_saude = nivel_saude;
    }
    async criar(){
        const teste = database.create({
            imagens: this.imagens,
            nome: this.nome,
            modelo: this.modelo,
            descricao: this.descricao,
            proprietario: this.proprietario,
            status: this.status,
            nivel_saude: this.nivel_saude
        })
        this.createdAt = teste.createdAt
    }
}

module.exports = MaquinaController;