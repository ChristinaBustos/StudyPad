const { query } = require('../../../utils/mysql');

const findAll = async () => {
    const sql = `SELECT * FROM usuarios`;
    return await query(sql,[]);
};


const findById = async (id) => {
    if(Number.isNaN(id)) throw Error('Wrong type');
    if (!id) throw Error('Missing fields');
    const sql = `SELECT * FROM usuarios where idusuario = ?`;
    return await query(sql,[id]);
};


const save = async (user) => {
    if(
        !user.username||
        !user.email ||
        !user.contrasenia ||
        !user.idlector
    ) throw Error ('Missing fields');

    const sql = `INSERT INTO (username,email,contrasenia,idlector) VALUES (?,?,?,?)`;
    const { insertedId } = await query (sql,[
        user.username,
        user.email,
        user.contrasenia,
        user.idlector
    ]);
    return {...user,id: insertedId};
};

module.exports = {
    findAll,
    findById,
    save
};