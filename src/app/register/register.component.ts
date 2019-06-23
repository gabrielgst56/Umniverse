import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../auth/auth.service';
import { User } from './../models/user';
import { APIRepository } from './../api-repository.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    isExistEmail: boolean;
    submitted: boolean;
    form: FormGroup;

    constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router, private APIRepository: APIRepository) { }

    ngOnInit() {
        this.form = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    get f() { return this.form.controls; }

    onSubmit(email: string, password: string) {

        this.submitted = true;
        this.isExistEmail = false;

        if (this.form.invalid) {
            return;
        }

        let user = new User(
            this.form.value.email,
            false,
            null
        );

        let returnValidate = this.authService.register(email, password);
        returnValidate.then((result) => {
            if (result){
                this.APIRepository.addUser(user);
            }else{
                this.isExistEmail = true;
            }
        });
    }
}
