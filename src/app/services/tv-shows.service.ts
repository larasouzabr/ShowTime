import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TvShowsService {
  ApiKey ="5330ecf323f9caf08ceb1326b924d61c"
  BaseUrl ="https://api.themoviedb.org/3"
  constructor(
    private http: HttpClient
  ) { }
  getPopularTvShows(): Observable<any> {
    return this.http.get(`${this.BaseUrl}/tv/popular?api_key=${this.ApiKey}`)
  }
  getOnTheAirTvShows(): Observable<any>{
    return this.http.get(`${this.BaseUrl}/tv/on_the_air?api_key=${this.ApiKey}`)
  }  
  getTopRatedTvShows(): Observable<any>{
    return this.http.get(`${this.BaseUrl}/tv/top_rated?api_key=${this.ApiKey}`)
  }
  getLatestTvShows(): Observable<any>{
    return this.http.get(`${this.BaseUrl}/tv/latest?api_key=${this.ApiKey}`)
  }
  getTvShowsDetails(id:number): Observable<any>{
    return this.http.get(`${this.BaseUrl}/tv/${id}?api_key=${this.ApiKey}&append_to_response=videos,images,details`)
  }
  getSimilarTvShow(id:number): Observable<any>{
    return this.http.get(`${this.BaseUrl}/tv/${id}/similar?api_key=${this.ApiKey}&append_to_response=videos,images,details`)
  }
  getAllTvShows(page:number): Observable<any>{
    return this.http.get(`${this.BaseUrl}/tv/popular?api_key=${this.ApiKey}&language=en-US&page=${page}`)
  }
  getTvShowGenres():Observable<any>{
    return this.http.get(`${this.BaseUrl}/genre/tv/list?api_key=${this.ApiKey}`)
  }
}
