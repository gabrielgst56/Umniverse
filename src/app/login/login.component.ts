import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { AuthService } from  '../auth/auth.service'; // Serviço de autenticação

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    isCompleted: boolean;
    submitted: boolean;

    constructor(public  authService:  AuthService, public router: Router) { 
        if (this.authService.isLoggedIn()) {
            this.router.navigate(['/']);
        }
    }

  ngOnInit() {
  }

  onSubmit(email: string, password: string) {

    this.submitted = true;

    let returnValidate = this.authService.login(email, password);
    returnValidate.then((result) => {
        this.isCompleted = result;
    });
}

}
