import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { TvShow } from 'src/app/dtos/TvShow';
import { tvShowsDetails } from 'src/app/dtos/tvShowsDetails';
import { TvShowsService } from 'src/app/services/tv-shows.service';

@Component({
  selector: 'app-tvshows-details',
  templateUrl: './tvshows-details.component.html',
  styleUrls: ['./tvshows-details.component.sass']
})
export class TvshowsDetailsComponent implements OnInit {

  tvshow!: tvShowsDetails;
  subs: Subscription[] = [];
  SimilarTvShows!: TvShow;
  constructor(
    private tvServ: TvShowsService,
    private route: ActivatedRoute,
  ) { }
  
  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        const id: any = params['id'];
        this.getTvShow(id);
        this.getSimilarTvShow(id);
      }
    );
  }

  getTvShow(id: any) {
    this.subs.push(this.tvServ.getTvShowsDetails(id).subscribe(
      data => this.tvshow = data)
    );
  }

  getSimilarTvShow(id: any) {
    this.subs.push(this.tvServ.getSimilarTvShow(id).pipe(take(1)).subscribe(
      data => this.SimilarTvShows = data)
    );
  }


}

