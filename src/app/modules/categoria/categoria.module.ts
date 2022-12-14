import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MainCategoriaComponent } from "./pages/main-categoria/main-categoria.component";
import { FormsModule } from "@angular/forms";
import { materialModules } from "src/app/services/material.modules";
import { AddCategoriaComponent } from "./pages/add-categoria/add-categoria.component";

@NgModule({
    declarations: [
        MainCategoriaComponent,
        AddCategoriaComponent,
    ],
    imports: [CommonModule,FormsModule,...materialModules],
    exports: [MainCategoriaComponent],
    bootstrap: [MainCategoriaComponent],
})
export class categoriaModule{}