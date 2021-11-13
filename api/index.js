const express = require('express'),
    routes = require('./routers'),
    app = express(),
    Port = 3005

app.use(express.json())
routes(app)
    
app.listen(Port, console.log(`Servidor rodando na porta ${Port}`))

module.exports = app;
