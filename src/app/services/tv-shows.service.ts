import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiKey, BaseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TvShowsService {

  constructor(
    private http: HttpClient
  ) { }
  getPopularTvShows(): Observable<any> {
    return this.http.get(`${BaseUrl}/tv/popular?api_key=${ApiKey}`)
  }
  getOnTheAirTvShows(): Observable<any>{
    return this.http.get(`${BaseUrl}/tv/on_the_air?api_key=${ApiKey}`)
  }  
  getTopRatedTvShows(): Observable<any>{
    return this.http.get(`${BaseUrl}/tv/top_rated?api_key=${ApiKey}`)
  }
  getLatestTvShows(): Observable<any>{
    return this.http.get(`${BaseUrl}/tv/latest?api_key=${ApiKey}`)
  }
}
