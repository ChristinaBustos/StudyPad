import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MainLectorComponent } from "./pages/main-lector/main-lector.component";
import { FormsModule } from "@angular/forms";
import { materialModules } from "src/app/services/material.modules";
import { AddLectorComponent } from "./pages/add-lector/add-lector.component";

@NgModule({
    declarations:[
        MainLectorComponent,
        AddLectorComponent,
    ],
    imports: [CommonModule,FormsModule, ...materialModules],
    exports: [MainLectorComponent],
    bootstrap: [MainLectorComponent],
})
export class lectorModule {}