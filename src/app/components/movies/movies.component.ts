import { Component, OnInit } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { Movie } from 'src/app/dtos/Movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.sass']
})
export class MoviesComponent implements OnInit {

  allMovies!: Movie;
  subs: Subscription[] = [];
  term: any;
  constructor(
    private movieserv : MovieService,
  ) {}

  ngOnInit(): void {
  this.subs.push(this.movieserv.getNowPlayingMovies().subscribe(data => this.allMovies = data));
  }

}


