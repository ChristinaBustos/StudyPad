const { Response, Router} = require('express');
const validateError = require('../../../utils/functions');
const { findAll,findById,save} =  require('./usuarios.gateway');

const getAll = async (req, res = Response)=> {
    try{
        const usuarios = await findAll();
        res.status(200).json(usuarios);
    }catch(error){
        console.log(error);
        const message = validateError(error);
        res.status(400).json( { message } );
    }
};

const getById = async(req, res = Response) => {
    try{
        const { id } = req.params;
        const person = await findById(id);
        res.status(200).json(person);
    } catch (error) {
        console.log(error);
        const message = validateError(error);
        res.status(400).json({ message });
    }
};

const insert = async(req, res = Response) => {
    try {
        const { username,email,contrasenia,idlector } = req.body;
        const person = await save({
            username,
            email,
            contrasenia,
            idlector
        });
        res.status(200).json(person);
    } catch (error) {
        console.log(error);
        const message = validateError(error);
        res.status(400).json({ message });
    }
};

const usuariosRouter = Router();

usuariosRouter.get(`/`,[],getAll);
usuariosRouter.get(`/:id`,[],getById);
usuariosRouter.post(`/`,[],insert);

module.exports = {
    usuariosRouter,
};