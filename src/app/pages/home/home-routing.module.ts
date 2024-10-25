import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { FavoritesComponent } from '../favorites/favorites.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'favorites/:userId', component: FavoritesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
