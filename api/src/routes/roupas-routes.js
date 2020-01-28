const express = require('express')
const router = express.Router()
const multer = require('multer')
const upload = multer({dest: 'uploads/'})

const RoupaController = require('../controllers/roupas-controller')

//Lista de todas Roupas
router.get("/", RoupaController.listarTodos)

//Busca por Roupa pelo ID
router.get("/:id", RoupaController.buscarPorId)

//Cadastro de Roupas
router.post("/", upload.single('image'), RoupaController.cadastrar)

//Alteração de dados de uma Roupa
router.put("/", RoupaController.alterar)

//Exclusão de uma Roupa
router.delete("/del/:id", RoupaController.deletar)

module.exports = router