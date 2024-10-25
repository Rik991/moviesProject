import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { iMovie } from '../interfaces/i-movie';
import { iFavorite } from '../interfaces/i-favorite';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  moviesUrl = environment.moviesUrl;

  constructor(private http: HttpClient) {}

  getAllMovies(): Observable<iMovie[]> {
    return this.http.get<iMovie[]>(this.moviesUrl);
  }
}
