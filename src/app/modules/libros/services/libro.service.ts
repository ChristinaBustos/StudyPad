import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APP_URL } from 'src/app/services/base-url.app';
import { Libro } from '../types/libro';

@Injectable({
    providedIn: 'root',
})
export class LibroService {
    loading: boolean = false;
    private books: Libro[] = [];
    edit: boolean = false;
    book: Libro = {
        id: 0,
        titulo:'',
        descripcion: '',
        idusuario: undefined,
        idcategoria: undefined,
       // portada: ''
    };

    get libros(){
        return[...this.books];
    }

    constructor(private http: HttpClient) {
    }

    findAll(){
        this.loading = true;
        return this.http.get<Libro[]>(`${APP_URL}api/book/`);
    }

    findAllPositions(){
        this.loading = true;
        return this.http.get<any>(`${APP_URL}api/book/`);
    }

    save(libros: Libro){
        this.loading = true;
        return this.http.post<Libro>(`${APP_URL}api/book/`,libros);
    }

    update(libros: Libro){
        this.loading = true;
        return this.http.put<Libro>(`${APP_URL}api/book/`,libros);
    }


  
}