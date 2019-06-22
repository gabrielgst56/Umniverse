import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';

import { AngularFireModule } from "@angular/fire";
import {AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { LayoutModule } from './shared/layout.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListStationComponent } from './list-stations/list-stations.component';
import { AddStationComponent } from './add-station/add-station.component';
import { EditStationComponent } from './edit-station/edit-station.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB_Odv5MB6c3_DHcnzcYnfUdxM3zfeAFAs",
    authDomain: "umniverse-282b8.firebaseapp.com",
    databaseURL: "https://umniverse-282b8.firebaseio.com",
    projectId: "umniverse-282b8",
    storageBucket: "umniverse-282b8.appspot.com",
    messagingSenderId: "684416461858",
    appId: "1:684416461858:web:4666767b8393472c"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    ListStationComponent,
    AddStationComponent,
    EditStationComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    }),
    AngularFireModule.initializeApp(firebaseConfig), // Firebase modules
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
