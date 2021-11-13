const { Router } = require('express')
const MaquinaController = require('../controllers/MaquinaController')

const router = Router()

router.post('/maquinas', async(req, res)=>{
    try{
        const dados = req.body
        const maquinas = new MaquinaController(dados)
        await maquinas.criar()
        res.status(201).json(dados)
    }catch(error){
        res.status(400).json({error: message})
    }
})

module.exports = router;