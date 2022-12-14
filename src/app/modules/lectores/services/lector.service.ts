import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { lectores } from '../types/lector';
import { APP_URL } from "src/app/services/base-url.app";

@Injectable({
    providedIn: 'root',
})
export class LectorService {
    loading: boolean = false;
    private people: lectores[] = [];
    edit: boolean = false;
    person: lectores = {
        id: 0,
        nombre: '',
        apellidop: '',
        apellidom: '',
        fechanacimiento: '',
        carrera: '',
        genero: ''
    };

    get lector(){
        return [...this.people];
    }

    constructor(private http : HttpClient){
    }

    findAll(){
        this.loading = true;
        return this.http.get<lectores[]>(`${ APP_URL }api/lector/`);
    }

    save(lector:lectores){
        this.loading = true;
        return this.http.post<lectores>(`${APP_URL}api/lector/`,lector);
    }

    update(lector:lectores){
        this.loading = true;
        return this.http.put<lectores>(`${APP_URL}api/lector/`,lector);
    }
}