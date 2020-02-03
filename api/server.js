const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
require("dotenv").config()


const roupasRoutes = require('./src/routes/roupas-routes')

const app = express()

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({limit: '50mb', type: 'application/json'}));
app.use(cors())

// Dir vai ser a rota completa para a pasta onde estão salvas as imagens, e essa rota é cadastrada na raiz/nome_da_imagem
//var dir = path.join(__dirname, 'public/img');
app.use('/images', express.static(__dirname +  '/public/img'));

//Cadastrando sistema de rota
app.use('/roupas',  roupasRoutes)

//Configurando a porta
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Api rodando na porta ${port}!`))

//Conectando com Mongo
const mongoose = require('mongoose');
mongoose.connect(
    `mongodb+srv://${process.env.DATA_USER}:${process.env.DATA_PASS}@mycluster-sbfan.gcp.mongodb.net/test?retryWrites=true&w=majority`, {
        useNewUrlParser: true, useUnifiedTopology: true 
    });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("Conectado com sucesso no Mongo")
});

