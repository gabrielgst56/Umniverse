import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../auth/auth.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    
    submitted: boolean;
    form: FormGroup;

    constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) { }

    ngOnInit() {
        this.form = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    get f() { return this.form.controls; }

    onSubmit(email: string, password: string) {
        this.submitted = true;

        if (this.form.invalid) {
            return;
        }

        this.authService.register(email, password)
    }
}
