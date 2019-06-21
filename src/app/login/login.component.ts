import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { AuthService } from  '../auth/auth.service'; // Serviço de autenticação

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    constructor(public  authService:  AuthService, public router: Router) { 
        if (this.authService.isLoggedIn()) {
            this.router.navigate(['/']);
        }
    }

    icon = 
    {
      "url": "http://127.0.0.1:5500/src/public/img/yellow-umbrella.png",
      "scaledSize": {
        height: 80,
        width: 80
      },
    };

  ngOnInit() {
  }

}
