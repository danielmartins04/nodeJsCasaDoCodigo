const LivroDao = require('../infra/livro-dao');
const db = require('../../config/database');

const BaseControlador = require('../controladores/base-controlador');
const baseControlador = new BaseControlador();

module.exports = (app) => {
    const rotaBase = BaseControlador.rotas();

    app.get(rotaBase.home, baseControlador.home());

    app.route(rotaBase.login)
       .get(baseControlador.login())
       .post(baseControlador.efetuaLogin());
};