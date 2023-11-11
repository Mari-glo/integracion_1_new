const { Router } = require ('express')
const { uploader } = require('../utils/multer')


const router = Router()

router.get('/subirarch', (req, res)=>{
    res.render('subirArch')
})

router.post('/subirarch', uploader.single('file'), (req,res)=>{
    if(!req.file) return res.status(400).send({status:'error', error:'No se ha guardado la imagen'})
    res.send({status:'Exito', payload: 'El archivo se ha subido con éxito'})

})

  



module.exports = router