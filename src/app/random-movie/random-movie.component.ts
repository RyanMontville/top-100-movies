import { Component } from '@angular/core';
import { Movie } from '../movie.model';
import { MovieService } from '../movies.service';
import { HeaderComponent } from "../header/header.component";
import { MovieDetailComponent } from "../movie-detail/movie-detail.component";

@Component({
    selector: 'app-random-movie',
    standalone: true,
    templateUrl: './random-movie.component.html',
    styleUrl: './random-movie.component.css',
    imports: [HeaderComponent, MovieDetailComponent]
})
export class RandomMovieComponent {
  constructor(private movieService: MovieService) {}
  randomMovie = this.movieService.getRandomMovie();
  cardWidth: string = "full";

  getAnotherMovie() {
    this.randomMovie = this.movieService.getRandomMovie();
  }
}
