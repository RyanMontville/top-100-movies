import { Injectable } from "@angular/core";
import { movie_data } from "./movie-data";
import { Movie } from "./movie.model";

@Injectable()
export class MovieService {
    private movies: Movie[] = movie_data;

    public getAllMovies() {
        return this.movies;
    }

    public getRandomMovie() {
        var randIndex = Math.floor(Math.random() * this.movies.length);
        return this.movies[randIndex];
    }

    public getMoviesInGenre(genre: string) {
        var genreString = this.getGenre(genre);
        return this.movies.filter(movie => {
            return movie.genres.includes(genreString);
        });
    }

    public getRandomMovieInGenre(genre: string) {
        var genreString = this.getGenre(genre);
        var moviesMatchingGenre =  this.movies.filter(movie => {
            return movie.genres.includes(genreString);
        });
        var randIndex = Math.floor(Math.random() * moviesMatchingGenre.length);
        return moviesMatchingGenre[randIndex];
    }

    public getGenre(id: string) {
            switch(id) {
                case "28": {
                    return "Action";
                }
                case "12": {
                    return "Adventure";
                }
                case "16": {
                    return "Animation";
                }
                case "35": {
                    return "Comedy";
                }
                case "80": {
                    return "Crime";
                }
                case "99": {
                    return "Documentary";
                }
                case "18": {
                    return "Drama";
                }
                case "10751": {
                    return "Family";
                }
                case "14": {
                    return "Fantasy";
                }
                case "36": {
                    return "History";
                }
                case "27": {
                    return "Horror";
                }
                case "10402": {
                    return "Music";
                }
                case "9648": {
                    return "Mystery";
                }
                case "10749": {
                    return "Romance";
                }
                case "878": {
                    return "Science Fiction";
                }
                case "10770": {
                    return "TV Movie";
                }
                case "53": {
                    return "Thriller";
                }
                case "10752": {
                    return "War";
                }
                case "37": {
                    return "Western";
                }
                default: {
                    return "Error ?????"
                }
            }
            

    }
}
