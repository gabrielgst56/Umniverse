import { Component, OnInit } from '@angular/core';

import { AuthService } from  '../../auth/auth.service'; // Serviço de autenticação

@Component({
  selector: 'top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  isLogin: boolean;

  constructor(private  authService:  AuthService) {
  }

  ngOnInit() {
    this.isLogin = this.authService.isLoggedIn();
    console.log(this.isLogin);
  }

}
