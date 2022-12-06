

create database studyPad;

use studyPad;
-- creacion de tablas

create table avatars(
idavatar int auto_increment not null primary key,
avatarimage longBlob not null);

create table categorias(
idcategoria int auto_increment not null primary key,
nombre varchar(50) not null unique	key,
cantidadlibros int default 0);

create table lectores(
idlector int auto_increment not null primary key,
nombre varchar(45) not null,
apellidop varchar(45) not null,
apellidom varchar (45) null,
fechanacimiento date,
carrera varchar(45),
genero varchar(15)
);

create table usuarios(
idusuario int auto_increment not null primary key,
username varchar(45) not null,
email varchar(45) not null,
contrasenia varchar(100) not null,
idlector int not null,
FOREIGN KEY(idlector) references lectores(idlector)
);

drop table usuarios;

create table libros(
idlibro int AUTO_INCREMENT primary key,
nomnbre varchar(120) not null,
descripcion varchar(250),
cantidadcapitulos int default 0,
idcategoria int not null,
idusuario int not null,
FOREIGN KEY (idcategoria) references categorias(idcategoria),
FOREIGN KEY (idusuario) references usuarios(idusuario)
);

create table publicaciones(
idpublicacion int not null AUTO_INCREMENT primary key,
fecha date not null,
mensaje text not null,
idusuario int not null,
FOREIGN KEY(idusuario) references usuarios(idusuario)
);

create table notifcaciones(
idnotificacion int not null auto_increment PRIMARY key,
fecha date not null,
contenido varchar(200) not null,
revisada BOOLEAN not null default false,
idusuario int not null,
FOREIGN KEY(idusuario) references usuarios(idusuario)
);

create table capitulos(
idcapitulo int not null AUTO_INCREMENT primary key,
nombre varchar(60) not null UNIQUE key,
contenido text not null,
puntuacion int not null default 0,
comentarios int not null default 0,
fechaactualizacion date  ,
estado boolean default false,
idlibro int not null,
FOREIGN KEY(idlibro) references libros(idlibro)
);

create table comentarios(
idcomentario int not null auto_increment primary key,
fechapublicacion date,
mensaje text not null,
idcapitulo int not null,
idusuario int not null,
foreign key (idcapitulo) references capitulos(idcapitulo),
foreign key (idusuario) references usuarios(idusuario)
);



-- creacion de PA´S

-- creacion de vistas

-- obtener los capitulos de un libro
delimiter //
create procedure getCapitulos(in idlibroPA int)
begin 
select nombrecapitulo,cantenidocapitulo,puntuacion,comentarios,fechaactalizacion from capitulos where idlibro = idlibroPA and estado = true;
end;
// delimiter ;

-- obtener todos los libros existen en una categoria 
delimiter // 
create procedure busquedaPorCtegoria(in idcategoriaPA int)
begin
select nombre,descripcion,capitulos from libros where idcategoria=idcategoriaPA;
end;
// delimiter ;

-- buscar libros por titulo 
delimiter  //
create procedure busquedaPorTitulo(in nombrePA varchar(129))
begin  
select nombre,descripcion,capitulos from libros where nombre like (concat('%',nombrePA,'%'));
end;
 // delimiter ;


-- creacion de triggers

ALTER USER 'root'@'localhost' identified with mysql_native_password by 'root';
flush privileges;





