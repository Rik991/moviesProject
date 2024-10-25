import { Component } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { UsersService } from '../../services/users.service';
import { iMovie } from '../../interfaces/i-movie';
import { iUser } from '../../interfaces/i-user';
import { iFavorite } from '../../interfaces/i-favorite';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  allMovies: iMovie[] = [];
  allUsers: iUser[] = [];
  favorites: iFavorite[] = [];

  constructor(private movieSvc: MoviesService, private userSvc: UsersService) {}

  ngOnInit() {
    this.movieSvc.getAllMovies().subscribe((movies) => {
      this.allMovies = movies;
    });

    this.userSvc.getAllUsers().subscribe((user) => {
      this.allUsers = user;
    });
  }
}
