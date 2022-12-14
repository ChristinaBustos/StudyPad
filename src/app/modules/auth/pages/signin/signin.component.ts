import { Component } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { User } from "../../types/user";
import { Router } from "@angular/router";
import { LoginStateService } from "../../../../services/login-state.service";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
})
export class SigninComponent {
  logoPath = "../../../../assets/img/studi.png";
  get isLoading(){
    return this.authService.isLoading;
  }
  user: User = {
    email: "",
    contrasenia: "",
  };
  get session() {
    return this.loginState.isLogged;
  }

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
    private loginState: LoginStateService
  ) {
    this.loginState.setIsLogged = !!localStorage.getItem("token");
    if (!this.loginState.isLogged) this.router.navigateByUrl("/");
  }

  signin() {
    this.authService.login(this.user);
  }
}
