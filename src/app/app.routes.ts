import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { RandomMovieComponent } from './random-movie/random-movie.component';
import { GenreComponent } from './genre/genre.component';
import { GenreRandomComponent } from './genre-random/genre-random.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'movies', component: AllMoviesComponent},
    {path: 'movies/random', component: RandomMovieComponent},
    {path: 'genres/:id', component: GenreComponent},
    {path: 'genres/:id/random', component: GenreRandomComponent}
];
