const { query } = require('../../../utils/mysql');

const findAll = async () =>{
    const sql = `SELECT * FROM lectores`;
    return await query(sql,[]);
};

const findById = async (id) => {
    if(Number.isNaN(id) )throw Error ('Wrong type');
    if(!id) throw Error ('Missing fields');
    const sql = `SELECT * FROM lectores where idlector = ?`;
    return await query(sql, [id]);
};

const save = async (lector) => {
    if(
        !lector.nombre||
        !lector.apellidop||
        !lector.fechanacimiento ||
        !lector.carrera||
        !lector.genero
    ) throw Error ('Missing fields');
    const sql = `INSERT INTO lectores (nombre,apellidop,apellidom,fechanacimiento,carrera,genero)
     VALUES (?,?,?,?,?,?)`;
     const { insertedId } = await query(sql, [
        lector.nombre,
        lector.apellidop,
        lector.apellidom || null,
        lector.fechanacimiento,
        lector.carrera,
        lector.genero
     ]);
     return {...lector,id: insertedId};
};

const modify = async(lector)=> {
    if( !lector.idlector||
        !lector.nombre||
        !lector.apellidop||
        !lector.fechanacimiento ||
        !lector.carrera||
        !lector.genero
    ) throw Error ('Missing fields');
    const sql = 'UPDATE  `lectores` SET `nombre` = ?,`apellidop` = ?,`apellidom` = ?,`fechanacimiento` = ?,`carrera` = ?,`genero` = ? WHERE `idlector` = ?';
    const { insertedId } = await query(sql, [
        lector.nombre,
        lector.apellidop,
        lector.apellidom || null,
        lector.fechanacimiento,
        lector.carrera,
        lector.genero,
        lector.idlector,
     ]);
     return {...lector,id: insertedId};
}


module.exports = {
    findAll,
    findById,
    save,
    modify
};