const roupaModel = require("../models/roupas-model")
const fileHelper = require('../plugins/file-helper')
const fs = require('fs')

class RoupaController {

    static async listarTodos(req, res) {
        let lista = await roupaModel.find({})
        res.json(lista)
    }

    static async buscarPorId(req, res) {
        let roupa = await roupaModel.findById({
            _id: req.params.id
        })
        res.json(roupa)
    }

    static async cadastrar(req, res, next) {
        if (!req.file) {
            //fileHelper.compressImage(req.file,100).then(newPath =>{
            //}).catch(err => console.log(err))
            return res.send("Houver erro no upload, da imagem")
        } else {
            var roupa = {}
            roupa.descricao = req.body.descricao,
            roupa.quantidade = req.body.quantidade,
            roupa.preco = req.body.preco
            roupa.imgUrl = "/images/" + req.file.filename
            
            await roupaModel.create(roupa).then(data => res.send("Produto Adicionado").catch(err => console.log(err)))
        }

    }

    static async alterar(req, res) {

        //Leitura dos dados em Json
        let id = req.body.id
        // Verificar se esse id existe antes

        var roupa = {
            descricao: req.body.descricao,
            img: req.body.img
        }

        await roupaModel.findByIdAndUpdate({
            _id: req.body.id
        }, roupa)

        res.send('Alterado com sucesso ')

    }

    static async deletar(req, res) {

        const id = req.params.id;
        try {
            //await roupaModel.findByIdAndDelete(id)
            var deleted = await roupaModel.deleteOne({
                _id: id
            })

            res.send(deleted)
        } catch (err) {
            res.send(err)
        }
    }
    static async deletarTodos(req, res) {

        await roupaModel.deleteMany({})

        res.send('Clear')
    }

}

module.exports = RoupaController