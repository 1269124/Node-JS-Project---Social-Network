import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthguardService} from "../../services/authguard.service";
import {FormBuilder, FormGroup, Validators, AbstractControl} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {invalid} from "@angular/compiler/src/render3/view/util";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6)]],
    email: ['', [Validators.required, Validators.email]]
  });
  private submitted = false;
  invalid = false;
  private user: any;
  user1: any;

  constructor(private router: Router,
              private authService: AuthguardService,
              private fb: FormBuilder,
              private http: HttpClient) {}

  ngOnInit(): void {
    if (this.authService.userExists()) {
      this.router.navigateByUrl("/movie");
    }
  }

  /*get f(): { [key: string]: AbstractControl} {
    return this.registerForm.controls;
  }*/

  onSubmit(){
    this.submitted = true;
    if (this.registerForm.invalid) {
      this.invalid = true;
      console.log("failed")
      return;
    }
    console.log(JSON.stringify(this.registerForm.controls['username'].value + ' ' + this.registerForm.controls['password'].value + ' ' + this.registerForm.controls['email'].value));

    /*this.getUser(this.registerForm.controls['username'].value)*/
  }

  return(){
    this.router.navigateByUrl("/login")
  }
}
