const express = require('express'),
    maquinas = require('./RouterMaquinas')


    module.exports = app =>{
    app.use(express.json(),
        maquinas
    )
}