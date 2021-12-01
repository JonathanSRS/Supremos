const database = require('../models/ModelUsuarios')

class UsuarioController{
    constructor({nome, email, senha, dataCriacao}){
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }

    async criar(){
        const criarUsuario = database.create({
            nome: this.nome,
            email: this.email,
            senha: this.senha
        })
        this.dataCriacao = criarUsuario.dataCriacao
    }
}

module.exports = UsuarioController;