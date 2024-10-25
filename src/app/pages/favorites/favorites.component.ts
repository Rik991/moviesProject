import { Component, OnInit } from '@angular/core';
import { iFavorite } from '../../interfaces/i-favorite';
import { AuthService } from '../../auth/auth.service';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute } from '@angular/router';
import { FavoriteService } from '../../services/favorite.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss',
})
export class FavoritesComponent implements OnInit {
  userId: number | null = null;
  favorites: iFavorite[] = [];

  constructor(
    private authService: AuthService,
    private favoriteService: FavoriteService
  ) {}

  ngOnInit() {
    this.authService.user$.subscribe((user) => {
      if (user) {
        this.userId = user.id;
        this.loadFavorites();
      }
    });
  }

  loadFavorites() {
    if (this.userId) {
      this.favoriteService.getFavorites(this.userId).subscribe((favorites) => {
        this.favorites = favorites;
      });
    }
  }

  removeFromFavorites(favorite: iFavorite) {
    if (
      confirm(`Vuoi davvero rimuovere ${favorite.movie.title} dai preferiti?`)
    ) {
      this.favoriteService
        .removeFromFavorites(favorite)
        .subscribe(() => this.loadFavorites());
    }
  }
}
