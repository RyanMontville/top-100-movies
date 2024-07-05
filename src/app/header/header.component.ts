import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  showMenu = false;
  showGenres = false;
  showGenresRandom = false;
  constructor(private router: Router) {}

  goToRandom() {
    this.router.navigate(['/movies/random']);
    this.showMenu = false;
  }
  goToAllMovies() {
    this.router.navigate(['/movies']);
    this.showMenu = false;
  }
  goToGenre(id: string) {
    var url: string = "/genres/" + id;
    this.showGenres = false;
    this.router.navigate([url]);
  }
  goToGenreRandom(id: string) {
    var url: string = "/genres/" + id + "/random";
    this.showGenresRandom = false;
    this.router.navigate([url]);
    this.showGenresRandom = false;
    this.showMenu = false;
  }
  toggleGenreMenu() {
    this.showMenu = false;
    this.showGenres = true;
  }
  toggleGenreRandomMenu() {
    this.showMenu = false;
    this.showGenresRandom = true;
  }
}



