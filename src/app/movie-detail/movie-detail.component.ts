import { Component, Input } from '@angular/core';
import { Movie } from '../movie.model';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [NgClass],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})
export class MovieDetailComponent {
  @Input() movie!: Movie;
  @Input() cardWidth!: string;

}
