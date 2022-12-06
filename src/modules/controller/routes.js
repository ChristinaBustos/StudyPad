const { lectoresRouter } = require('./lectores/lector.controller');
const {userRouter} = require ('./usuarios/usuarios.controller');

module.exports = {
    lectoresRouter,
    userRouter,
};