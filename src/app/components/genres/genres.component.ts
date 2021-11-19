import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { MovieService } from 'src/app/services/movie.service';
import { TvShowsService } from 'src/app/services/tv-shows.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.sass']
})
export class GenresComponent implements OnInit {

  MoviesGenres: any;
  TvShowsGenres: any;
  constructor(
    private movieServ: MovieService,
    private tvshowserv: TvShowsService,
    private spinner: NgxSpinnerService
    ) { }

  ngOnInit() {
    this.spinner.show();
    setTimeout(() => {
      this.movieServ.getMovieGenres().subscribe(res => {
        this.MoviesGenres = res.genres;
      }
      );
      this.tvshowserv.getTvShowGenres().subscribe(res => {
        this.TvShowsGenres = res.genres;
      }
      );
      this.spinner.hide();
    }, 2000);
    
  }

}
