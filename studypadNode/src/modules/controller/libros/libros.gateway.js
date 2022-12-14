const { query } = require('../../../utils/mysql');

const findAll = async () => {
    const sql = `SELECT * FROM libros`;
    return await query(sql, []);
};

const findById = async (id) => {
    if( Number.isNaN(id)) throw Error('Wronng type');
    if(!id) throw Error('Missing fields');
    const sql = `SELECT * FROM libros WHERE idlibro=?`;
    return await query(sql,[id]);
};

const save = async (book) => {
    if(
        !book.titulo||
        !book.descripcion||
        !book.idcategoria||
        !book.idusuario ||
        !book.portada
    )throw Error ('Missing fields');
    const sql = `INSERT INTO libros (titulo,descripcion,idcategoria,idusuario)
    VALUES (?,?,?,?`;
    const { insertedId } = await query(sql,[
        book.titulo,
        book.descripcion,
        book.idcategoria,
        book.idusuario,
        book.portada
    ]);
    return {...book,id: insertedId };
};

const modify = async (book) => {
    if(
        !book.titulo||
        !book.descripcion||
        !book.idcategoria||
        !book.idusuario||
        !book.idlibro
    )throw Error ('Missing fields');
    const sql = 'UPDATE libros SET `titulo`=?,`descripcion`=?,`idcategoria`=?,`idusuario`=? WHERE `idlibro`=?';
    const { insertedId } = await query(sql,[
        book.titulo,
        book.descripcion,
        book.idcategoria,
        book.idusuario,
        book.idlibro
    ]);
    return {...book,id: insertedId };
};

module.exports = {
    findAll,
    findById,
    save,
    modify
};