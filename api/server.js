const express = require('express')
const bodyParser = require('body-parser')
var cors = require('cors')

const roupasRoutes = require('./src/routes/roupas-routes')

const app = express()


app.use(bodyParser.json({limit: '50mb', type: 'application/json'}));
app.use(cors())
/*
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    next();
  });  
*/

//Cadastrando sistema de rota
app.use('/roupas',  roupasRoutes)

//Configurando a porta
const port = 3000
app.listen(port, () => console.log(`Api rodando na porta ${port}!`))

//Conectando com Mongo

var mongoose = require('mongoose');
mongoose.connect(
    "mongodb+srv://abc:123@mycluster-sbfan.gcp.mongodb.net/test?retryWrites=true&w=majority", {
        useNewUrlParser: true, useUnifiedTopology: true 
    });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("Conectado com sucesso no Mongo")
});

//Código do JWT

app.use("/gerar-token", function (req, res) {

    // JWT
    var token = jwt.sign(req.body, chavePrivada);


    res.send(token)

})


function verificarToken(req, res, next) {

    //JWT
    //Leitura dos header para verificar ser tem o atributo authorization
    if (typeof req.headers.authorization !== "undefined") {

        //Dentro do atribuito authorization virá uma string como Bearer <Token>
        //fazemo split para obter apenas o token
        var token = req.headers.authorization.split(" ")[1]

        //Pedimos par ao JWT verificar se o token é valido
        var decoded = jwt.verify(token, chavePrivada);

        //Imprimios o usuário que foi utilizado na hora da geração do toke pela rota de cadastro
        console.log("usuario:" + decoded.usuario + " senha:" + decoded.senha);
        //res.sendStatus(403)
        console.log("Vericando token, está OK")
        next()
    } else {
        res.sendStatus(403)
    }
}