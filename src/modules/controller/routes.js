const { lectoresRouter } = require('./lectores/lector.controller');
const {userRouter} = require ('./usuarios/usuarios.controller');
const { bookRouter } = require('./libros/libros.controller');
module.exports = {
    lectoresRouter,
    userRouter,
    bookRouter,
};