import { Component, Input, OnInit } from '@angular/core';
import { TvShow } from 'src/app/dtos/TvShow';

@Component({
  selector: 'app-all-tv-shows',
  templateUrl: './all-tv-shows.component.html',
  styleUrls: ['./all-tv-shows.component.sass']
})
export class AllTvShowsComponent implements OnInit {
  @Input()
  tvshows : TvShow | null = null
  @Input()
  term: any;
  constructor() { }

  ngOnInit(): void {
  }

}
