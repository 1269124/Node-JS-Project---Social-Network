import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthguardService} from "../../services/authguard.service";
import {FormBuilder, FormGroup, Validators, AbstractControl} from "@angular/forms";

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

  constructor(private router: Router,
              private authService: AuthguardService,
              private fb: FormBuilder) {}

  ngOnInit() {
  }

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
    this.submitted = true;

      // stop here if form is invalid
      /*if (this.registerForm.invalid) {
        return;
      }*/

    this.loading = true;
    /*this.userService.register(this.registerForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success('Registration successful', true);
          this.router.navigate(['/login']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });*/
    /*this.router.navigateByUrl("/login")*/
  }

  return(){
    this.router.navigateByUrl("/login")
  }

}
