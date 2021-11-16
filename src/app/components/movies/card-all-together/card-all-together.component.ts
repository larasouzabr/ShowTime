import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/dtos/Movie';

@Component({
  selector: 'app-card-all-together',
  templateUrl: './card-all-together.component.html',
  styleUrls: ['./card-all-together.component.sass']
})
export class CardAllTogetherComponent implements OnInit {
  @Input() 
  movies: Movie | null = null;
 @Input()
  term:any;
  constructor() { }

  ngOnInit(): void {
  }

}
