import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  isLoggedIn: boolean = false;
  userId: number | null = null;
  constructor(private authSvc: AuthService) {}

  ngOnInit() {
    this.authSvc.isLoggedIn$.subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
    });

    this.authSvc.user$.subscribe((user) => {
      this.userId = user ? user.id : null; // Recupera l'ID dell'utente
    });
  }

  logout(): void {
    if (confirm(`Vuoi davvero effettuare il logOut?`)) {
      this.authSvc.logout();
      alert('logout effettuato correttamente');
    }
  }
}
