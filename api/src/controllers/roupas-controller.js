const roupaModel = require("../models/roupas-model")

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

    static cadastrar(req, res) {
        roupaModel.create(req.body)
        //envia mensagem pro client
        res.send('Cadastrando com sucesso')
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
        try{
        //await roupaModel.findByIdAndDelete(id)
        var deleted = await roupaModel.deleteOne({_id: id})
            
            res.send(deleted)
        }catch(err){
            res.send(err)
        }
    }
    static async deletarTodos(req, res) {

        await roupaModel.deleteMany({})

        res.send('Clear')
    }
    static async teste(req, res) {
        res.send('Teste')
    }

}

module.exports = RoupaController