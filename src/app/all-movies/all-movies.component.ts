import { Component } from '@angular/core';
import { MovieService } from '../movies.service';
import { Movie } from '../movie.model';
import { HeaderComponent } from "../header/header.component";
import { MovieDetailComponent } from "../movie-detail/movie-detail.component";

@Component({
    selector: 'app-all-movies',
    standalone: true,
    templateUrl: './all-movies.component.html',
    styleUrl: './all-movies.component.css',
    imports: [HeaderComponent, MovieDetailComponent]
})
export class AllMoviesComponent {
  constructor(private movieService: MovieService) {}
  movies: Movie[] = this.movieService.getAllMovies();
  cardWidth: string = "card";
}
