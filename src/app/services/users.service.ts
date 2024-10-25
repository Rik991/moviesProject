import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iUser } from '../interfaces/i-user';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { iFavorite } from '../interfaces/i-favorite';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<iUser[]> {
    return this.http.get<iUser[]>(environment.userUrl);
  }
  addToFavorites(favorite: iFavorite): Observable<iFavorite> {
    return this.http.post<iFavorite>(`${environment.favoritesUrl}`, favorite);
  }
}
