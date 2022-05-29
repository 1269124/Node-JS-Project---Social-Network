import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthguardService} from "../../services/authguard.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private user = {
    id: 4,
    username: "dido"
  }
  private accessToken: string = "abc123"
  private randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  private result = '';

  constructor(
    private router: Router,
    private authService: AuthguardService
  ) { }

  ngOnInit(): void {
    if (this.authService.userExists()) {
      this.router.navigateByUrl("/movie");
    }
  }

  login() {
    // username
    // password
    // API login
    // token
    // redirect
    localStorage.setItem("loggedUser", JSON.stringify(this.user));
    localStorage.setItem("accessToken", this.accessToken);
    this.generateToken(10);
    /*this.accessToken = this.result;*/
    console.log(this.result)
    this.authService.isLoggedIn.next(true);
    this.router.navigateByUrl("/movie")
  }

  generateToken(length: number){
    for (let i = 0; i < length; i++ ) {
      this.result += this.randomChars.charAt(Math.floor(Math.random() * this.randomChars.length));
    }
    return this.result;
  }

  register() {
    this.router.navigateByUrl("/register")
  }

}
