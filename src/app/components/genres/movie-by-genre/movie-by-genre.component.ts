import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Movie, MovieResults } from 'src/app/dtos/Movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-by-genre',
  templateUrl: './movie-by-genre.component.html',
  styleUrls: ['./movie-by-genre.component.sass']
})
export class MovieByGenreComponent implements OnInit {
  

  title!: string;
  movies!: any;

  constructor(
    private movieserv: MovieService,
    private router: ActivatedRoute,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.spinner.show();
    setTimeout(() => {
      this.router.params.subscribe( (params) => {
        const id = params['id'];
        this.title = params['name'];
        this.getMoviesByGenre(id);
      });
      this.spinner.hide();
    }, 2000);
   
  }

  getMoviesByGenre(id:number) {
    this.movieserv.getMoviesByGenre(id).subscribe(
      res => {
        this.movies = res;
      });
  }
}

