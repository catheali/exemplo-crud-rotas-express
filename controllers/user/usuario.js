const e = require('express');
const fs = require('fs');
const usuarios = fs.readFileSync('controllers/user/usuarios.db');

function listar(){
     let result =  JSON.parse(usuarios.map( usuario => {
        return {
            "id": usuario.id,
            "nome": usuario.nome,
            "email": usuario.email
        }
    }))
    return  result;
}

function buscar(id){
    let usuario = JSON.parse(usuarios).filter(us => us.id == id )
    return usuario[0]
}

function auth(emailReq, senhaReq){
    //Select *FROM usuarios WHERE email = '
    let usuario = JSON.parse(usuarios).filter(us => us.email === emailReq);

    //se nao encontrou nenhum usuario é pq nenhum usuario existe cm esse email
        if(usuario.length === 0){
            return 'Usuario não encontrado';
        }
        //senha incorreta
        if(usuario[0].senha !== senhaReq){
            return 'Senha Incorreta';
        }
        //se chegou ate aqui, o email e a senha conferem

        //argon2i algoritimo de senha
        let token = "shutd0wn!" + usuario[0].senha + "bl4p1nK1nY0uR4r34"
        token = token.split("").reverse().join("");

         //salvando o token no db.file
         usuarios = JSON.parse(usuarios).map(us => {
            if(us.id === usuario[0].id){
                us.token = token;
            }
         })   


    return token
}

module.exports = {
    listar: listar,
   buscar: buscar,
   auth: auth
}