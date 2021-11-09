import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiKey, BaseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(
  private http: HttpClient
  ) {}

  getPopularMovies(): Observable<any> {
    return this.http.get(`${BaseUrl}/movie/popular?api_key=${ApiKey}`)
  }
  getUpcomingMovies(){
    return this.http.get(`${BaseUrl}/movie/upcoming?api_key=${ApiKey}`)
  }  
  getTopRatedMovies(){
    return this.http.get(`${BaseUrl}/movie/top_rated?api_key=${ApiKey}`)
  }
  getNowPlayingMovies(){
    return this.http.get(`${BaseUrl}/movie/now_playing?api_key=${ApiKey}`)
  }
}
