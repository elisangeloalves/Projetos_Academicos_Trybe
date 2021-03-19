const { Router } = require('express');
const rescue = require('express-rescue');
const { cadastro, login } = require('../middlewares');
const { tokenValidation } = require('../validations');
const UserController = require('../controllers/UserController');

const route = Router();

route.get('/user', tokenValidation, rescue(UserController.buscaTodosUsuarios));
route.get('/user/:id', tokenValidation, rescue(UserController.buscaUm));
route.post('/user', cadastro, rescue(UserController.cadastraUsuario));
route.post('/login', login, rescue(UserController.efetuaLogin));
route.delete('/user/me', tokenValidation, rescue(UserController.deletaProprioUsuario));

module.exports = route;
