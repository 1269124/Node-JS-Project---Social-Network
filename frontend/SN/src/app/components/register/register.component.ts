import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthguardService} from "../../services/authguard.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router,
              private authService: AuthguardService) { }

  ngOnInit(): void {
  }

  registerUser(){



    this.router.navigateByUrl("/login")
  }

  onSubmit(){
    
  }

  return(){
    this.router.navigateByUrl("/login")
  }

}
