// Criando Schema
var mongoose = require('mongoose');
var roupaSchema = new mongoose.Schema({
    descricao: {
        type: String,
        
    },
    img:{
        type: String,
    },
    flex:{
        type: Number
    },
    preco:{
        type: Number,
        
    },
    quantidade:{
        type: Number
    }
});
module.exports = mongoose.model('Roupa', roupaSchema);