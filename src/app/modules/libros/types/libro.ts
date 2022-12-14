import { Entity } from '../../../types/entity';
import { categorias } from '../../categoria/types/categorias';
import { User } from '../../auth/types/user';

export type Libro = Entity<number> & {
    titulo: string;
    descripcion: string;
    idusuario?: User;
    idcategoria?:categorias;
    portada?: string
};