import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [AuthComponent],
  imports: [CommonModule, AuthRoutingModule, FormsModule],
})
export class AuthModule {}
