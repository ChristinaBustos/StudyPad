import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { materialModules } from "src/app/services/material.modules";
import { MainLibroComponent } from "./pages/main-libro/main-libro.component";
import { AddLibroComponent } from "./pages/add-libro/add-libro.component";

@NgModule({
    declarations: [
        MainLibroComponent,
        AddLibroComponent,
    ],
    imports: [CommonModule,FormsModule,...materialModules],
    exports: [MainLibroComponent],
    bootstrap: [MainLibroComponent],
})
export class libroModule{}