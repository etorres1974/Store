const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const compression = require("compression")
require("dotenv").config()


const roupasRoutes = require('./src/routes/roupas-routes')

const app = express()

app.use(bodyParser.json({limit: '50mb', type: 'application/json'}));
app.use(cors())
app.use(compression())

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

