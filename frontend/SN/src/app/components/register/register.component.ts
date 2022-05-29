import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthguardService} from "../../services/authguard.service";
import {FormBuilder, FormGroup, Validators, AbstractControl} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

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
  submitted = false;
  loading = false;
  user: any;

  constructor(private router: Router,
              private authService: AuthguardService,
              private fb: FormBuilder,
              private http: HttpClient) {}

  ngOnInit() {}


  get f(): { [key: string]: AbstractControl} {
    return this.registerForm.controls;
  }

  onSubmit(){
    this.submitted = true;
    if (this.registerForm.invalid) {
      console.log("failed")
      return;
    }
    console.log(JSON.stringify(this.registerForm.controls['username'].value));

    if (this.registerForm.invalid) {
      return;
    }

    /*this.getUser(this.registerForm.controls['username'].value)*/
  }

  /*getUser(username: string){
    this.http
      .get(`http://localhost:3000/api/register/}`,{})
      .subscribe(res => {
        this.user = res;
      })
  }*/

  return(){
    this.router.navigateByUrl("/login")
  }
}
