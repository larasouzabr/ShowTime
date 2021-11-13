import { Component, ElementRef, Inject, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { Movie } from 'src/app/dtos/Movie';
import { MovieDetails } from 'src/app/dtos/movieDetails';
import { MovieVideo } from 'src/app/dtos/movieVideo';
import { MovieService } from 'src/app/services/movie.service';
import { SlicePipe } from '@angular/common';

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

  
  @ViewChild('closeModal')
  public closeModal!: ElementRef;
  @ViewChild('openModal')
  public openModal!: ElementRef;
  @ViewChild('matTrailerDialog')
  matTrailerDialog!: TemplateRef<any>;

  constructor(
    private movieserv: MovieService,
    private route: ActivatedRoute,
    public trailerDialog: MatDialog,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        const id: any = params['id'];
        this.getMovie(id);
        this.getSimilarMovie(id);
        this.getMovieVideo(id);
      }
    );
  }
  getMovie(id: any) {
    this.subs.push(this.movieserv.getMovie(id).pipe(take(1)).subscribe(
      data => this.movie = data)
    );
  }

  getSimilarMovie(id: any) {
    this.subs.push(this.movieserv.getSimilarMovies(id).pipe(take(1)).subscribe(
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

  openDialog(): void {
    const dialogRef = this.trailerDialog.open(this.matTrailerDialog, {});
    dialogRef.disableClose = true;
  }

}




@Component({
  selector: 'app-movie-dialog',
  templateUrl: './movie-dialog/movie-dialog.component.html'
})
export class AppMovieDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<AppMovieDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  closeDialog() {
    this.dialogRef.close('Pizza!');
  }

}