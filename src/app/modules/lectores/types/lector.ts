import { Entity } from '../../../types/entity';

export type lectores = Entity<number> & {
    nombre: string;
    apellidop: string;
    apellidom: string;
    fechanacimiento: string;
    carrera: string;
    genero: string;
  };