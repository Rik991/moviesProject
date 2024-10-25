import { Component } from '@angular/core';
import { iLoginRequest } from '../../interfaces/i-login-request';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  form!: FormGroup;

  constructor(
    private authSvc: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  login() {
    if (this.form.valid) {
      const formData: iLoginRequest = this.form.value;
      this.authSvc.login(formData).subscribe(
        (data) => {
          this.router.navigate(['/home']);
          alert('Login effettuato correttamente');
        },
        (error) => {
          alert('Errore nel login: ' + error.message);
        }
      );
    }
  }
}
