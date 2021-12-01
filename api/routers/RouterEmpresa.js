const {Router} = require('express'),
    Empresa = require('../models/ModelEmpresas')

const router = Router()

router.post('/usuario/empresa', async (req, res)=>{
    try{
        const idUsuario = req.params.id
        const dados = req.body
        const empresa = await Empresa.create({...dados})
        res.status(201).json(empresa)
    }catch(error){
        res.status(400).json(error.message)
    }
})

router.get('/usuarios/empresa', async(req, res)=>{
    const dados = req.query.nome
    try{
        const empresa = await Empresa.find({nome: {$regex: dados}})
        res.status(200).json(empresa)
    }catch(error){
        res.status(404).json(error.message)
    }
})

router.get('/usuarios/empresa/:id', async(req, res)=>{
    const id = req.params.id
    
    try{
        const empresa = await Empresa.findById({'_id': id})
        res.status(200).json(empresa)
    }catch(error){
        res.status(404).json(error.message)
    }
})

router.delete('/usuarios/empresa/:id', async(req, res)=>{
    const id = req.params.id
    try{
        const empresa = await Empresa.deleteOne({'_id': id})
        res.status(204).json(empresa)
    }catch(error){
        res.status(400).json(error.message)
    }
})

module.exports = router;