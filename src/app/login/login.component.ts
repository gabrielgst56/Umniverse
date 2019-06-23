import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { User } from '../models/user';
import { APIRepository } from './../api-repository.service';
import { AuthService } from '../auth/auth.service'; // Serviço de autenticação

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    isCompleted: boolean;
    submitted: boolean;

    private users: Array<User> = [];

    constructor(public authService: AuthService, public router: Router, private APIRepository: APIRepository) {
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

    onSubmit(email: string, password: string) {

        this.submitted = true;
        this.isCompleted = true;

        let returnValidate = this.authService.login(email, password);
        returnValidate.then((result) => {
            if (result) {
                this.isCompleted = result;
                this.router.navigate(['/']);
            } else {
                this.isCompleted = result;
            }
        });
    }

}
