import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movie } from 'src/app/dtos/Movie';
import { TvShow } from 'src/app/dtos/TvShow';
import { MovieService } from 'src/app/services/movie.service';
import { TvShowsService } from 'src/app/services/tv-shows.service';


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
  popularTvShows!: TvShow;
  OnTheAirTvShows!: TvShow;
  TopRatedTvShows!: TvShow;

  constructor(
    private movieserv : MovieService,
    private TVshowServ: TvShowsService
  ) { }

  ngOnInit(): void {
    // Movies
    this.subs.push(this.movieserv.getPopularMovies().subscribe(data => this.popular = data));
    this.subs.push(this.movieserv.getTopRatedMovies().subscribe(data => this.topRated = data));
    this.subs.push(this.movieserv.getUpcomingMovies().subscribe(data => this.upcoming = data));
    this.subs.push(this.movieserv.getNowPlayingMovies().subscribe(data => this.nowPlaying = data));

   // Tv Shows
   this.subs.push(this.TVshowServ.getPopularTvShows().subscribe(data => this.popularTvShows = data));
   this.subs.push(this.TVshowServ.getOnTheAirTvShows().subscribe(data => this.OnTheAirTvShows = data));
   this.subs.push(this.TVshowServ.getTopRatedTvShows().subscribe(data => this.TopRatedTvShows = data));
  }
  
 
}
