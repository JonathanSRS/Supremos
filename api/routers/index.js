const express = require('express'),
    maquinas = require('./RouterMaquinas'),
    usuarios = require('./RouterUsuarios'),
    empresas = require('./RouterEmpresa')


    module.exports = app =>{
    app.use(express.json(),
        maquinas,
        usuarios,
        empresas,
    )
}