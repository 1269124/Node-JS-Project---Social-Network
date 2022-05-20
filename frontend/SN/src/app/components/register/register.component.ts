import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthguardService} from "../../services/authguard.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    email: new FormControl('', Validators.required)
});

  constructor(private router: Router,
              private authService: AuthguardService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', Validators.required]
    });
  }

  /*get f() { return this.registerForm.controls; }*/

  registerUser(){

    console.log(JSON.stringify(this.registerForm.value));

    this.router.navigateByUrl("/login")
  }

  onSubmit(){
    this.router.navigateByUrl("/login")
  }

  return(){
    this.router.navigateByUrl("/login")
  }

}
