const { hashPassword } = require ('../../../utils/functions');
const { query } = require ('../../../utils/mysql');

const save = async (user) => {
    if(!user.username || !user.email || !user.contrasenia || !user.role || !user.idlector )
    throw Error ('Missihg fields');
    const hashedPassword = await hashPassword(user.contrasenia)
    const sql = `INSERT INTO usuarios(username,email,contrasenia,role,status,idlector)
    VALUES (?,?,?,?,1,?)`;
    const { insertId } = await query(sql,[
        user.username,
        user.email,
        hashedPassword,
        user.role,
        user.idlector,
    ]);
    delete user.contrasenia;
    return{...user,id: insertId};
}

module.exports = {
    save,
};