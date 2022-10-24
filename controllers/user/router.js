const router = require('express').Router();
const usuarioControler = require("./usuario");

router.get('/usuarios', (req, res)=>{
    res.send(
        usuarioControler.listar()
    )
})

router.get('/usuarios/:id', (req, res)=>{
    res.send(
        usuarioControler.buscar(req.params.id)
    )
})
router.post('/login', (req, res)=>{
    let {email, senha } = req.body;

    res.send(
        usuarioControler.auth(email, senha)
    )
});

module.exports = router;