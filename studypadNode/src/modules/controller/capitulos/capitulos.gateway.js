const { query } = require ('../../../utils/mysql');

const findAll = async () => {
    const sql = `SELECT * FROM capitulos`;
    return await query(sql, []);
};

const findById = async (id) => {
    if(Number.isNaN(id)) throw Error ('Wrong type');
    if (!id) throw Error ('Missing fields');
    const sql = `SELECT * FROM capitulos where idcapitulo = ?`;
    return await query (sql, [id]);
};

const save = async (capitulo) => { 
    if (
        !capitulo.nombrecap||
        !capitulo.contenido||
        !capitulo.puntuacion||
        !capitulo.comentarios||
        !capitulo.fecha||
        !capitulo.estado||
        !capitulo.idlibro
    ) throw Error ('Missing fields');
    const sql = `INSERT INTO capitulos (nombre,contenido,puntuacion,comentarios,fechaactualizacion,estado,idlibro)
    VALUES (?,?,?,?,?,?,?)`;
    const { insertedId } = await query(sql, [
        capitulo.nombrecap,
        capitulo.contenido,
        capitulo.puntuacion,
        capitulo.comentarios,
        capitulo.fecha,
        capitulo.estado,
        capitulo.idlibro
    ]);
    return {...capitulo, id: insertedId};
};

module.exports ={
    findAll,
    findById,
    save
}