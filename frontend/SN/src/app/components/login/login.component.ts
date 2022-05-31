import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthguardService} from "../../services/authguard.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

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
  loginForm: FormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });
  private accessToken: string = "abc123"
  private randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  private result = '';
  invalid = false;

  constructor(
    private router: Router,
    private authService: AuthguardService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    if (this.authService.userExists()) {
      this.router.navigateByUrl("/movie");
    }
  }

  onSubmit() {
    // username
    // password
    // API login
    // token
    // redirect
    if (this.loginForm.invalid) {
      this.invalid = true;
      console.log("failed invalid")
      return;
    }

    if (this.loginForm.controls['username'].value == this.user.username){
      localStorage.setItem("loggedUser", JSON.stringify(this.user));
      this.generateToken(10);
      this.accessToken = this.result;
      console.log(this.result);
      localStorage.setItem("accessToken", this.accessToken);
      this.authService.isLoggedIn.next(true);
      this.router.navigateByUrl("/movie");
      return;
    }

    this.invalid = true;
    console.log("failed wrong")
    return;
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
