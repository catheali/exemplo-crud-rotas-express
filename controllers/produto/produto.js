const fs = require('fs');

function listar(){
     return fs.readFileSync('controllers/produto/produto.json')
}

function listarPromo(){
   let produtos = JSON.parse(fs.readFileSync('controllers/produto/produto.json'))
   let promo = produtos.slice(-3, produtos.lenght)
    return console.log(promo)
}


function criar(produto){
    fs.appendFile('controllers/produto/produto.json', produto, ()=>{
        if (err) throw err;
        console.log('The "data to append" was appended to file!');
     });   
    return produto
}

function atualizar(){
    return "Atualizar produto"
}

function deletar(produto_id){
    produtos = produtos.filter((prod) => prod.id != produto_id)
    return JSON.stringify(produtos)
}

module.exports = {
    listar: listar,
    listPromo: listarPromo,
    criar: criar,
    atualizar: atualizar,
    deletar: deletar
}