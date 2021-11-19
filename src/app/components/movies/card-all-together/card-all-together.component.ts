import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie } from 'src/app/dtos/Movie';
import { MovieDetails } from 'src/app/dtos/movieDetails';

@Component({
  selector: 'app-card-all-together',
  templateUrl: './card-all-together.component.html',
  styleUrls: ['./card-all-together.component.sass']
})
export class CardAllTogetherComponent implements OnInit {
 

  @Input() 
  movies: Movie | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
