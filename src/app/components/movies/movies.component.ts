import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
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
  total_items!: any;


  constructor(
    private movieserv : MovieService,
    private spinner : NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
      this.getAllMovies(1);
      this.spinner.hide();
    }, 2000);
  }
  getAllMovies(page: number) {
    this.movieserv.getAllMovies(page).subscribe(
      res => {
        console.log(res)
        this.total_items = res.total_results;
        this.allMovies = res;

      }, () => {}
    );
  }
  changePage(event:any) {
    this.getAllMovies(event.pageIndex + 1);
  }
}


