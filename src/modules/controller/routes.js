const { lectoresRouter } = require('./lectores/lector.controller');
const {userRouter} = require ('./usuarios/usuarios.controller');
const { bookRouter } = require('./libros/libros.controller');
const {categoriasRouter}= require('./categorias/categorias.controller');
const {capitulosRouter}=require('./capitulos/capitulos.controller');
module.exports = {
    lectoresRouter,
    userRouter,
    bookRouter,
    categoriasRouter,
    capitulosRouter
};