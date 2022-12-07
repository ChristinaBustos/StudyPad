const { Response,Router } = require('express');
const validateError = require ('../../../utils/functions');
const { findAll, findById,save,modify } = require('./libros.gateway');

const getAll = async (req, res = Response)=>{
    try{
        const libros = await findAll();
        res.status(200).json(libros);
    }catch(error){
        console.log(error);
        const message = validateError(error);
        res.status(400).json({ message });
    }
};

const getById = async (req, res = Response) =>{
    try {
        const { id } = req.params;
        const libro = await findById(id);
        res.status(200).json(libro);
    } catch (error) {
        console.log(error);
        const message = validateError(error);
        res.status(400).json({ message });
    }
};

const insert = async (req, res = Response)=> {
    try {
        const {titulo,descripcion,idcategoria,idusuario} = req.body;
        const book = await save({
            titulo,
            descripcion,
            idcategoria,
            idusuario
        });
        res.status(200).json(book);
    } catch (error) {
        console.log(error);
        const message = validateError(error);
        res.status(400).json({message});
    }
};

const update = async (req, res = Response)=> {
    try {
        const {titulo,descripcion,idcategoria,idusuario,idlibro} = req.body;
        const book = await modify({
            titulo,
            descripcion,
            idcategoria,
            idusuario,
            idlibro
        });
        res.status(200).json(book);
    } catch (error) {
        console.log(error);
        const message = validateError(error);
        res.status(400).json({message});
    }
};

const bookRouter = Router();

bookRouter.get(`/`,[],getAll);
bookRouter.get(`/:id`,[],getById);
bookRouter.post(`/`,[],insert);
bookRouter.put(`/`,[],update);


module.exports = {
    bookRouter
};