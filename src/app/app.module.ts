import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

// Firebase
import { AngularFireModule } from "@angular/fire";
import {AngularFireAuthModule } from "@angular/fire/auth";
import { LayoutModule } from './shared/layout.module';

// Firebase Config
var firebaseConfig = {
    apiKey: "AIzaSyBS3vgEW-1KGj0h-ykUfm4BcUw7j64RsGw",
    authDomain: "testebancodedados-19d21.firebaseapp.com",
    databaseURL: "https://testebancodedados-19d21.firebaseio.com",
    projectId: "testebancodedados-19d21",
    storageBucket: "testebancodedados-19d21.appspot.com",
    messagingSenderId: "562501988850",
    appId: "1:562501988850:web:ed08837e0f95f1af"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    }),
    AngularFireModule.initializeApp(firebaseConfig), // Firebase modules
    AngularFireAuthModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
