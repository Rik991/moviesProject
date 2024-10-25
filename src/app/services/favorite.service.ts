import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iFavorite } from '../interfaces/i-favorite';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FavoriteService {
  constructor(private http: HttpClient) {}

  addToFavorites(favorite: iFavorite): Observable<iFavorite> {
    return this.http.post<iFavorite>(environment.favoritesUrl, favorite);
  }

  getFavorites(userId: number): Observable<iFavorite[]> {
    return this.http.get<iFavorite[]>(
      `${environment.favoritesUrl}?userId=${userId}`
    );
  }

  removeFromFavorites(favorite: iFavorite): Observable<void> {
    return this.http.delete<void>(`${environment.favoritesUrl}/${favorite.id}`);
  }
}
