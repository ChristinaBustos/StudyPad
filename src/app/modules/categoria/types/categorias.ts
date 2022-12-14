import { Entity } from "src/app/types/entity";

export type categorias = Entity<number> & {
    nombre: string;
    cantidadlibros: string;
};