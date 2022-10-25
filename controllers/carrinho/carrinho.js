const {pegarUsuarioLogado} = require('../user/usuario')
const fs = require('fs')

let carrinho = JSON.parse(fs.readFileSync(__dirname + "/carrinho.json"));

function buscarCarrinho(token){

    if(!token) {
        return false
    }
    let usuario = pegarUsuarioLogado(token);

    let resultado = carrinho.filter(cadaItem => {
        cadaItem.usuario === usuario.id
    })
    return JSON.stringify(resultado);
}

function adcProdCarrinho(){
    return('adicionando ')
}



module.exports= {
    buscarCarrinho,
    adcProdCarrinho,
}