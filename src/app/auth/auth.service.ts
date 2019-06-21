import { Injectable } from '@angular/core';

import { Router } from "@angular/router";
import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { User } from 'firebase';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    user: User;
    

    constructor(public afAuth: AngularFireAuth, public router: Router) {
        this.afAuth.authState.subscribe(user => {
            if (user) {
                this.user = user;
                localStorage.setItem('user', JSON.stringify(this.user));
            } else {
                localStorage.setItem('user', null);
            }
        })
    }

    async  login(email: string, password: string) {

        try {
            await this.afAuth.auth.signInWithEmailAndPassword(email, password);
            this.router.navigate(['/']);
        } catch (e) {
            alert("Error!" + e.message);
        }
    }

    async register(email: string, password: string) {
        var result = await this.afAuth.auth.createUserWithEmailAndPassword(email, password)
        this.sendEmailVerification();
    }

    async sendEmailVerification() {
        await this.afAuth.auth.currentUser.sendEmailVerification()
        this.router.navigate(['/login']);
    }

    async sendPasswordResetEmail(passwordResetEmail: string) {
        return await this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail);
    }

    async  loginWithGoogle() {
        await this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
        this.router.navigate(['']);
    }

    

    async logout() {
        try {
            await this.afAuth.auth.signOut();
            localStorage.removeItem('user');
            this.router.navigate(['/']);
        } catch (e) {
            alert("Error!" + e.message);
        }
    }

    // Verificar se o usuário está logado
    public isLoggedIn(): boolean {
        const user = JSON.parse(localStorage.getItem('user'));
        return user !== null;
    }
}
