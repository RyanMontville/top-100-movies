import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Movie } from '../movie.model';
import { MovieService } from '../movies.service';
import { HeaderComponent } from "../header/header.component";
import { MovieDetailComponent } from "../movie-detail/movie-detail.component";

@Component({
    selector: 'app-genre-random',
    standalone: true,
    templateUrl: './genre-random.component.html',
    styleUrl: './genre-random.component.css',
    imports: [HeaderComponent, MovieDetailComponent]
})
export class GenreRandomComponent {
  genre: string = "";
  genreString: string = "";
  cardWidth: string = "full"
  randomGenreMovie!: Movie;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.genre = params['id'];
      this.randomGenreMovie = this.movieService.getRandomMovieInGenre(this.genre);
      this.genreString = this.movieService.getGenre(this.genre);
    });

  }

  getAnotherMovie() {
    this.randomGenreMovie = this.movieService.getRandomMovieInGenre(this.genre);
  }
}
