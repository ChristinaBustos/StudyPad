import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { categorias } from '../types/categorias';
import { APP_URL } from "src/app/services/base-url.app";

@Injectable({
    providedIn: 'root',
})
export class categoriaService{
    loading: boolean = false;
    private categorias: categorias[] = [];
    edit: boolean = false;
    categoria: categorias = {
        nombre: '',
        cantidadlibros: ''
    };

    get categori(){
        return [...this.categorias];
    }

    constructor(private http : HttpClient){
    }

    findAll(){
        this.loading = true;
        return this.http.get<categorias[]>(`${APP_URL}api/category/`);
    }

    save(categori:categorias){
        this.loading = true;
        return this.http.post<categorias>(`${APP_URL}api/category/`,categori);
    }

    update(categori:categorias){
        this.loading = true;
        return this.http.put<categorias>(`${APP_URL}api/category/`,categori);
    }

}