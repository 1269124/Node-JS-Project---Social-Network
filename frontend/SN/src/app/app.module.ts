import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { MovieComponent } from './components/movie/movie.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {HttpClientModule} from "@angular/common/http";
import {AuthguardService} from "./services/authguard.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    MovieComponent,
    LoginComponent,
    NotFoundComponent,
    FileUploadComponent,
    RegisterComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule
    ],
  providers: [AuthguardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
