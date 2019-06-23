import { User } from './../models/user';
import { Injectable } from '@angular/core';

import { Router } from "@angular/router";
import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";

import { APIRepository } from './../api-repository.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    user: User;
    public isAdmin: boolean;


    constructor(public afAuth: AngularFireAuth, public router: Router, private APIRepository: APIRepository) {
        this.afAuth.authState.subscribe(user => {
            if (user) {
                localStorage.setItem('user', JSON.stringify(user));
            } else {
                localStorage.setItem('user', null);
            }
        })
    }

    async  login(email: string, password: string) {

        try {
            await this.afAuth.auth.signInWithEmailAndPassword(email, password);
            this.APIRepository.getUser(email).subscribe((data: Array<User>) => {
                if (data[0].IsAdmin) {
                    this.isAdmin = true;
                }
                this.user = new User(data[0].Email,
                    data[0].IsAdmin,
                    data[0].key);
            });
            return true;
        } catch (e) {
            return false;
        }
    }

    async register(email: string, password: string) {
        try {
            var result = await this.afAuth.auth.createUserWithEmailAndPassword(email, password)
            this.sendEmailVerification();
            let user = new User(
                email,
                false,
                null
            );
            this.APIRepository.addUser(user);
            return true;
        } catch{
            return false;
        }
    }

    async sendEmailVerification() {
        await this.afAuth.auth.currentUser.sendEmailVerification()
        this.router.navigate(['/login']);
    }

    async sendPasswordResetEmail(passwordResetEmail: string) {
        try {
            await this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail);
            return true;
        } catch{
            return false;
        }
    }

    async loginWithGoogle() {
        await this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
        this.APIRepository.getUser(this.afAuth.auth.currentUser.email).subscribe((data: Array<User>) => {
            if (data.length == 0) {
                let user = new User(
                    this.afAuth.auth.currentUser.email,
                    false,
                    null
                );
                this.APIRepository.addUser(user);
            } else {
                if (data[0].IsAdmin) {
                    this.isAdmin = true;
                }
            }
        });
        this.router.navigate(['']);
    }


    async logout() {
        await this.afAuth.auth.signOut();
        localStorage.removeItem('user');
        this.router.navigate(['/']);
        this.user = null;
        this.isAdmin = false;
    }

    // Verificar se o usuário está logado
    public isLoggedIn(): boolean {
        const user = JSON.parse(localStorage.getItem('user'));
        return user !== null;
    }
}
