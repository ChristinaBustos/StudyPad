const { Router } = require("express");
const { findAll, findById, save } = require("./capitulos.gateway")

const getAll = async (req, res = Response) => {
    try{
        const capitulo = await findAll();
        res.status(200).json(capitulo);
    }catch (error){
        console.log(error);
        const message = validateError(error);
        res.status(400).json({message});
    }
};

const getById = async (req, res = Response) => {
    try{
        const{ id } = req.params;
        const person = await findById(id);
        res.status(200).json(person);
    }catch (error){
        console.log(error);
        const message = validateError(error);
        res.status(400).json({message});
    }
};

const insert = async (req, res = Response)=> {
    try{
        const {nombrecap,contenido,puntuacion,comentarios,fecha,estado,idlibro} = req.body;
        const capitulo = await save({
            nombrecap,
            contenido,
            puntuacion,
            comentarios,
            fecha,
            estado,
            idlibro
        });
        res.status(200).json(capitulo);
    }catch(error){
        console.log(error);
        const message = validateError (error);
        res.status(400).json({message});
    }
};

const capitulosRouter = Router();

capitulosRouter.get(`/`,[], getAll);
capitulosRouter.get(`/:id`, [], getById);
capitulosRouter.post(`/`, [], insert);

module.exports = {
    capitulosRouter
}