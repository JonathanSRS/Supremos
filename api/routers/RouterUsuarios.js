const { Router } = require('express')
const { UsuarioController } = require('../controllers')

const router = Router()

router.post('/usuarios', async (req, res)=>{
    try{
        const dados = req.body;
        const usuarios = new UsuarioController(dados)
        await usuarios.criar()
        res.json(dados)
    }catch(error){
        res.status(400).json({error: message})
    }
})

module.exports = router;