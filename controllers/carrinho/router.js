const express = require('express')
const route = express.Router();

const controller = require("./carrinho.js")


route.get('/carrinho', (req, res) => {
    let token = req.headers.authorization;
    res.send(controller.buscarCarrinho(token))
})

route.post('/carrinho', (req, res) => {
res.send(carrinho.criar(req.body))
})

route.delete('/carrinho/:id', (req, res) => {
    res.send(controller.deletar(req.params.id))
})

module.exports = route;