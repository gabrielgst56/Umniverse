import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ControlContainer, } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../auth/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

    isCompleted: boolean;
    submitted: boolean;
    form: FormGroup;

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]]
    });
  }

  get f() { return this.form.controls; }

  onSubmit(email: string) {
    this.submitted = true;

    if (this.form.invalid) {
        return;
    }

    let returnValidate = this.authService.sendPasswordResetEmail(email)
    returnValidate.then((result) => {
        this.isCompleted = result;
    });
  }
}
