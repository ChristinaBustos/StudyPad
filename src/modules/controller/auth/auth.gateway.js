const { generateToken } = require('../../../config/jwt');
const { validatePassword } = require('../../../utils/functions');
const { query } = require('../../../utils/mysql');

const login = async (user) =>{
    if(!user.email || !user.contraseina) throw Error('Missing fields');
    const sql = `SELECT * FROM usuarios WHERE email = ? AND status = 1 `;
    const existUser = await query(sql,[user.email]);
    if(await validatePassword(user.contrasenia, existUser[0].contrasenia)){
        return {
            token: generateToken({
                email: user.email,
                role: existUser[0].role,
                idusuario: existUser[0].idusuario,
                usuarios: existUser[0].idlector,
            })
        }
    }
    throw Error ('Passwor mismatch')
};

module.exports = {
    login,
}