import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable, Subject, Subscription } from 'rxjs';
import { Movie } from 'src/app/dtos/Movie';
import { MovieService } from 'src/app/services/movie.service';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.sass']
})
export class MoviesComponent implements OnInit {

  allMovies!: Movie;
  subs: Subscription[] = [];
  term: any;
 
  total_items!: any;


  constructor(
    private movieserv : MovieService,
    private spinner : NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.getAllMovies(1);
  }
  getAllMovies(page: number) {
    this.movieserv.getAllMovies(page).pipe(take(1)).subscribe(
      res => {
        this.total_items = res.total_results;
        this.allMovies = res;
      }, () => {}
    );
  }
  changePage(event:any) {
    this.getAllMovies(event.pageIndex + 1);
  }
}


