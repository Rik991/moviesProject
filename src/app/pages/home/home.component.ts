import { Component } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { UsersService } from '../../services/users.service';
import { iMovie } from '../../interfaces/i-movie';
import { iUser } from '../../interfaces/i-user';
import { iFavorite } from '../../interfaces/i-favorite';
import { AuthService } from '../../auth/auth.service';
import { FavoriteService } from '../../services/favorite.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  allMovies: iMovie[] = [];
  allUsers: iUser[] = [];
  favorites: iFavorite[] = [];
  userId: number | null = null;

  constructor(
    private movieSvc: MoviesService,
    private userSvc: UsersService,
    private authSvc: AuthService,
    private favoriteSvc: FavoriteService
  ) {}

  ngOnInit() {
    this.movieSvc.getAllMovies().subscribe((movies) => {
      this.allMovies = movies;
    });

    this.userSvc.getAllUsers().subscribe((users) => {
      this.allUsers = users;
    });

    this.authSvc.user$.subscribe((user) => {
      if (user) {
        this.userId = user.id;
        this.loadFavorites();
      }
    });
  }

  loadFavorites() {
    if (this.userId) {
      this.favoriteSvc.getFavorites(this.userId).subscribe((favorites) => {
        this.favorites = favorites;
      });
    }
  }

  addToFavorites(movie: iMovie) {
    if (this.userId) {
      const isFavorite = this.isFavorite(movie);
      if (isFavorite) {
        const favoriteToRemove = this.favorites.find(
          (fav) => fav.movie.id === movie.id && fav.userId === this.userId
        );
        if (favoriteToRemove) {
          this.favoriteSvc
            .removeFromFavorites(favoriteToRemove)
            .subscribe(() => this.loadFavorites());
        }
      } else {
        const favorite: iFavorite = { userId: this.userId, movie };
        this.favoriteSvc
          .addToFavorites(favorite)
          .subscribe(() => this.loadFavorites());
      }
    }
  }

  isFavorite(movie: iMovie): boolean {
    return this.favorites.some((fav) => fav.movie.id === movie.id);
  }
}
