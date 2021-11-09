import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movie } from 'src/app/dtos/Movie';
import { MovieService } from 'src/app/services/movie.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  sticky = false;
  subs: Subscription[] = [];
  trending!: Movie;
  popular!: Movie;
  topRated!: Movie;
  originals!: Movie;
  nowPlaying!: Movie;
  upcoming!: Movie;
  

  constructor(
    private movieserv : MovieService
  ) { }

  ngOnInit(): void {

    this.subs.push(this.movieserv.getPopularMovies().subscribe(data => this.popular = data));
    this.subs.push(this.movieserv.getTopRatedMovies().subscribe(data => this.topRated = data));
    this.subs.push(this.movieserv.getUpcomingMovies().subscribe(data => this.upcoming = data));
    this.subs.push(this.movieserv.getNowPlayingMovies().subscribe(data => this.nowPlaying = data));
  }
  
 
}
