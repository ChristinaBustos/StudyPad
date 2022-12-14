import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "../../app.component";
import { MainUserComponent } from "../../modules/users/main-user/main-user.component";
import { SigninComponent } from "../../modules/auth/pages/signin/signin.component";
import{ MainLectorComponent } from "../../modules/lectores/pages/main-lector/main-lector.component";
import { MainCategoriaComponent } from "../../modules/categoria/pages/main-categoria/main-categoria.component";
import { MainLibroComponent } from "../../modules/libros/pages/main-libro/main-libro.component";

const routes: Routes = [
  {
    path: "",
    component: MainLectorComponent,
    pathMatch: "full",
  },
  {
    path: "lector",
    component: MainLectorComponent,
  },
  {
    path: "position",
    component: MainCategoriaComponent,
  },
  {
    path: "user",
    component: MainLibroComponent,
  },
  {
    path: "auth",
    component: SigninComponent,
  },
  {
    path: "**",
    redirectTo: "",
  },
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  bootstrap: [AppComponent],
})
export class AppRouterModule {}
