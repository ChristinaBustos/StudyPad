const { Response, Router } = require('express');
const validateError = require ('../../../utils/functions');
const {findAll, findById,save,modify} = require ('./lector.gateway');

const getAll = async (req, res = Response)=>{
    try{
        const lector = await findAll();
        res.status(200).json(lector);
    }catch(error){
        console.log(error);
        const message = validateError(error);
        res.status(400).json({message});
    }

};

const getById = async (req,res = Response) => {
    try{
        const { id } = req.params;
        const person = await findById(id);
        res.status(200).json(person);
    }catch (error) {
        console.log(error);
        const message = validateError(error);
        res.status(400).json({message});
    }
};

const insert = async (req, res = Response)=> {
    try{
        const {nombre,apellidop,apellidom,fechanacimiento,carrera,genero} = req.body;
        const lector = await save({
            nombre,
            apellidop,
            apellidom,
            fechanacimiento,
            carrera,
            genero
        });
        res.status(200).json(lector);
    }catch(error){
        console.log(error);
        const message = validateError(error);
        res.status(400).json({message});
    }
};

const update = async (req, res = Response)=> {
    try{
        const {nombre,apellidop,apellidom,fechanacimiento,carrera,genero,idlector} = req.body;
        const lector = await modify({
            nombre,
            apellidop,
            apellidom,
            fechanacimiento,
            carrera,
            genero,
            idlector
        });
        res.status(200).json(lector);
    }catch(error){
        console.log(error);
        const message = validateError(error);
        res.status(400).json({message});
    }
};

const lectoresRouter = Router();

lectoresRouter.get(`/`,[],getAll);
lectoresRouter.get(`/:id`,[],getById);
lectoresRouter.post(`/`,[],insert);
lectoresRouter.put(`/`,[],update);


module.exports = {
    lectoresRouter,
};