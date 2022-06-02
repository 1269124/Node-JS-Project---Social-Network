import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    data : Date = new Date();
    /*focus;
    focus1;*/

    constructor() { }

    ngOnInit() {
        let body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');

        let navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
    }
    ngOnDestroy(){
        let body = document.getElementsByTagName('body')[0];
        body.classList.remove('login-page');

        let navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    }

}
