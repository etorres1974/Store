// Criando Schema
var mongoose = require('mongoose');
var roupaSchema = new mongoose.Schema({
    descricao: {
        type: String, 
        required: true //if not required, vuex breaks at filtered search
    },
    preco:{
        type: Number,
        required: true
    },
    quantidade:{
        type: Number,
        required: true
    },
    imgUrl:{
        type: String,
        required: true
    }
    
});
module.exports = mongoose.model('Roupa', roupaSchema);