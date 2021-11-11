import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Genre } from 'src/app/dtos/genre';
import { Movie } from 'src/app/dtos/Movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.sass']
})
export class MoviesComponent implements OnInit {

  genres: Genre[] = [];
  allMovies!: Movie;
  subs: Subscription[] = [];

  constructor(
    private movieserv : MovieService,
  ) {
   }

  ngOnInit(): void {
    this.movieserv.getMovieGenres().subscribe( res => {
      this.genres = res.genres;
    }
  );
  this.subs.push(this.movieserv.getNowPlayingMovies().subscribe(data => this.allMovies = data));
  }

}
