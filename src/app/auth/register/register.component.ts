import { Component } from '@angular/core';
import { iUser } from '../../interfaces/i-user';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  form!: FormGroup;

  constructor(
    private authSvc: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  register() {
    if (this.form.valid) {
      const formData: Partial<iUser> = {
        name: this.form.value.name,
        email: this.form.value.email,
        password: this.form.value.password,
      };

      this.authSvc.register(formData).subscribe((res) => {
        this.router.navigate(['/auth/login']);
        alert('Registrazione effettuata correttamente');
      });
    } else {
      alert('Controlla i tuoi dati, ci sono errori nel modulo.');
    }
  }
}
