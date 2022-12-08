const {query} =  require  ('../../../utils/mysql');



const findAllCategories = async() =>{
 const  sql =`SELECT * FROM categorias `;
    return await query(sql,[]);
 };  

 const findCategoryById =async (id)=>{
    if(Number.isNaN(id)) throw Error('Wrong type');
    if(!id) throw Error('Missing fields');
    const  sql =`SELECT nombre, cantidadlibros FROM categorias  WHERE idcategoria=?`;
    return await query(sql,[id]);
 };


 const save = async (category)=>{
   console.log(category.nombre)
    if (!category.nombre) throw Error ('Missing fields');
    const sql=`INSERT INTO categorias (nombre) VALUES (?)`;

    const {insertedId} = await  query (sql,[
      category.nombre
    ]);
    return{...category,id: insertedId}
 };

 const updateCategory =async(category) =>{
    if(Number.isNaN(category.id)) throw Error('Wrong type');
    if(!category.id ||
       !category.nombre) throw Error('Missing fields');
    const sql =`UPDATE categorias set nombre=? WHERE idcategoria=?`;

    const {insertedId} =await query (sql,[
        category.nombre,
        category.id
    ]);

    return {...category,id: insertedId};

 };



 const deleteCategory = async(id) =>{
     if (Number.isNaN(id))throw Error ('Wrong type');
     if (!id) throw Error ('Missing fields');
     const sql = 'DELETE FROM categorias WHERE idcategoria =?'; 
     return await query(sql,[id]);
 }

 module.exports ={
    findAllCategories,
    findCategoryById,
    save,
    updateCategory,
    deleteCategory,
 };