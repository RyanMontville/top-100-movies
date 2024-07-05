import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { Movie } from '../movie.model';
import { MovieService } from '../movies.service';
import { MovieDetailComponent } from "../movie-detail/movie-detail.component";

@Component({
    selector: 'app-genre',
    standalone: true,
    templateUrl: './genre.component.html',
    styleUrl: './genre.component.css',
    imports: [HeaderComponent, MovieDetailComponent]
})
export class GenreComponent {
  genre: string = "";
  movies: Movie[] = [];
  cardWidth: string = "card";

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService) { }

    ngOnInit() {
      this.route.params.subscribe((params: Params) => {
        this.genre = params['id'];
        this.movies = this.movieService.getMoviesInGenre(this.genre);
      });
      
    }

}
