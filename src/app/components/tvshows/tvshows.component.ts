import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TvShow } from 'src/app/dtos/TvShow';
import { TvShowsService } from 'src/app/services/tv-shows.service';

@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.sass']
})
export class TvshowsComponent implements OnInit {

  allTvShows!: TvShow;
  subs: Subscription[] = [];

  constructor(
    private tvshowserv : TvShowsService,
  ) {
   }

  ngOnInit(): void {
  this.subs.push(this.tvshowserv.getOnTheAirTvShows().subscribe(data => this.allTvShows = data));
 
  }
}

