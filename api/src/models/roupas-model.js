// Criando Schema
var mongoose = require('mongoose');
var roupaSchema = new mongoose.Schema({
    descricao: {
        type: String, 
        required: true //if not required, vuex breaks at filtered search
    },
    img:{
        type: String,
    },
    preco:{
        type: Number,
        
    },
    quantidade:{
        type: Number
    }
});
module.exports = mongoose.model('Roupa', roupaSchema);