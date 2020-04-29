const { check, validationResult } = require('express-validator/check');

class Livro {
    static validacoes() {
        return [
            check('titulo').isLength({ min: 5}).withMessage('o titulo precisa ter no minimo 5 caracteres'),
            check('preco').isCurrency().withMessage('o preco precisa ter um valor monetario valido!')      
         ];
    }
}

module.exports = Livro;