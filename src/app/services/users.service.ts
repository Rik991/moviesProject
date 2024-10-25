import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iUser } from '../interfaces/i-user';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<iUser[]> {
    return this.http.get<iUser[]>(environment.userUrl);
  }
}
