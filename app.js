//const connectToRepository = require("./database/mongodb");
const Controller = require('./controllers/LivroController');
const express = require('express');
const app = express();
const axios = require('axios');
const bodyParser = require('body-parser');
const path = require("path");

const port = 3000;

//connectToRepository();

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get("/teste", Controller.selecionarLivro);
app.post("/search", Controller.buscarLivro);
app.get("/livro/:bookId", Controller.detalhaLivro);

app.get('/', function (req, res) {
    res.render('login');
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

module.exports = {
    app,
}