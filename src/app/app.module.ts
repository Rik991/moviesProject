import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { FooterComponent } from './footer/footer.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WelcomeComponent,
    RegisterComponent,
    LoginComponent,
    FooterComponent,
    FavoritesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, ReactiveFormsModule],
  providers: [provideHttpClient(withInterceptorsFromDi())],
  bootstrap: [AppComponent],
})
export class AppModule {}
