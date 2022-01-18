import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/dtos/Movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  searchRes!: Array<Object>;
  searchStr!: string;
  
  constructor(
    private movieserv : MovieService  
      ) { }

  ngOnInit(): void {
  }
  searchMovies() {
    this.movieserv.searchMovies(this.searchStr).subscribe(res => {
      this.searchRes = res.results;
    })
  }
}
