// Criando Schema
var mongoose = require('mongoose');
var roupaSchema = new mongoose.Schema({
    descricao: {
        type: String,
        required: true
    },
    img:{
        type: String,
    },
    flex:{
        type: Number
    },
    preco:{
        type: Number,
        required: true
    },
    quantidade:{
        type: Number
    }
});
module.exports = mongoose.model('Roupa', roupaSchema);