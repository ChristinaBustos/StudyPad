const { Response, Router } = require('express');
const{ validateError } = require ('../../../utils/functions');
const { save } = require('./usuarios.gateway');

const saveAndFlush = async (req,res = Response) => {
    try{
        const {username,email,contrasenia,role,idlector} = req.body;
        const user = await save({username,email,contrasenia,role,idlector});
        res.status(200).json(user);
    }catch (error){
        console.log(error);
        const message = validateError(error);
        res.status(400).json({message});
    }
};

const userRouter = Router();
userRouter.post(`/`,[],saveAndFlush);

module.exports = {
    userRouter,
};