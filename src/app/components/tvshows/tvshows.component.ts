import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { TvShow } from 'src/app/dtos/TvShow';
import { TvShowsService } from 'src/app/services/tv-shows.service';

@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.sass']
})
export class TvshowsComponent implements OnInit {
  total_items!: number;
  allTvShows!: TvShow;
  term:any
  constructor(
    private tvshowserv : TvShowsService,
  ) {
   }

   ngOnInit(): void {
    this.getAllTvShows(1);
  }
  getAllTvShows(page: number) {
    this.tvshowserv.getAllTvShows(page).pipe(take(1)).subscribe(
      res => {
        this.total_items = res.total_results;
        this.allTvShows = res;
      }, () => {}
    );
  }
  changePage(event:any) {
    this.getAllTvShows(event.pageIndex + 1);
  }
}

