const fs = require('fs');

function listar(){
     return JSON.parse(fs.readFileSync('controllers/produto/produto.json').toString())
}

function listarPromo(){
    let desconto = 2;
    let produtos = listar()
    let promo = produtos.slice(-2, produtos.lenght).map(prod => { return {
           ...prod, "valorPromocional": prod.valor / desconto
        }})
    return promo
}

function criar(produto){
  let produtos = listar()
  produtos.push(produto);
  fs.writeFileSync('controllers/produto/produto.json', JSON.stringify(produtos))
  return produtos
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