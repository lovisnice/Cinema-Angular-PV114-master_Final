import { NgModule } from '@angular/core';
import { RouterModule, Routes, mapToCanActivate } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MovieCardComponent } from './components/movies/movie-card/movie-card.component';
import { MovieCardListComponent } from './components/movies/movie-card-list/movie-card-list.component';
import { MovieDetailsComponent } from './components/movies/movie-details/movie-details.component';
import { AddMovieComponent } from './components/movies/add-movie/add-movie.component';
import { LoginComponent } from './components/account/login/login.component';
import { AuthorizedGuard } from './authorized.guard';
import { AddGenreComponent } from './components/movies/add-genre/add-genre.component';

const routes: Routes = [
  {path:"",component: HomeComponent},
  // {path:"movies", component: MovieCardListComponent,canActivate:[AuthorizedGuard]},
  {path:"movies", component: MovieCardListComponent,canActivate:[AuthorizedGuard]},
  {path:"movie-details/:id", component: MovieDetailsComponent},
  {path:"add-movie", component: AddMovieComponent, canActivate:[AuthorizedGuard]},
  {path:"login", component: LoginComponent},
  {path:"add-genre",component:AddGenreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
