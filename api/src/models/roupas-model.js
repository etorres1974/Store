// Criando Schema
var mongoose = require('mongoose');
var roupaSchema = new mongoose.Schema({
    descricao: {
        type: String,
        required: true
    },
    img:{
        type: String,
        required: true,
    },
    fav:{
        type: Boolean,
        
    },
    flex:{
        type: Number
    },
    preco:{
        type: Number,
        required: true
    }
});
//Criando o modelo 
module.exports = mongoose.model('Roupa', roupaSchema);