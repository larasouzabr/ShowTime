import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { Movie } from 'src/app/dtos/Movie';
import { MovieDetails } from 'src/app/dtos/movieDetails';
import { MovieVideo } from 'src/app/dtos/movieVideo';
import { MovieService } from 'src/app/services/movie.service';
import { NgxSpinnerService } from "ngx-spinner";
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.sass']
})
export class MovieDetailsComponent implements OnInit {
  movie!: MovieDetails;
  video!: MovieVideo;
  subs: Subscription[] = [];
  SimilarMovies!: Movie;


  constructor(
    private movieserv: MovieService,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService,
    private themeService: ThemeService
  ) { }

  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
      this.route.params.subscribe(
        params => {
          const id: any = params['id'];
          this.getMovie(id);
          this.getSimilarMovie(id);
          this.getMovieVideo(id);
        }
      );
      this.spinner.hide();
    }, 2000);
  }


  getMovie(id: any) {
    this.subs.push(this.movieserv.getMovie(id).subscribe(
      data => this.movie = data)
    );
  }

  getSimilarMovie(id: any) {
    this.subs.push(this.movieserv.getSimilarMovies(id).subscribe(
      data => this.SimilarMovies = data)
    );
  }

  getMovieVideo(id: any) {
    this.subs.push(this.movieserv.getMovie(id).pipe(take(1)).subscribe(
      res => {
        if (res.results && res.results.length) {
          this.video = res.results[0];
          this.video['url'] = 'https://www.youtube.com/embed/' + this.video['key'];
        }
      },
    ));
  }


}

