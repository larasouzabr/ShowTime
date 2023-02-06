import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
   ApiKey ="5330ecf323f9caf08ceb1326b924d61c"
   BaseUrl ="https://api.themoviedb.org/3"
  
  constructor(
  private http: HttpClient
  ) {}

  getMovies(type: string, page: number): Observable<any> {
    return this.http.get(`${this.BaseUrl}movie/${type}?api_key=${this.ApiKey}&page=${page}`)
  }
  getPopularMovies(): Observable<any> {
    return this.http.get(`${this.BaseUrl}/movie/popular?api_key=${this.ApiKey}`)
  }
  getUpcomingMovies(): Observable<any>{
    return this.http.get(`${this.BaseUrl}/movie/upcoming?api_key=${this.ApiKey}`)
  }  
  getTopRatedMovies(): Observable<any>{
    return this.http.get(`${this.BaseUrl}/movie/top_rated?api_key=${this.ApiKey}`)
  }
  getNowPlayingMovies(): Observable<any>{
    return this.http.get(`${this.BaseUrl}/movie/now_playing?api_key=${this.ApiKey}`)
  }
  getMovieGenres(): Observable<any>{
    return this.http.get(`${this.BaseUrl}/genre/movie/list?api_key=${this.ApiKey}`)
  }
  getMoviesByGenre(id:number): Observable<any> {
    return this.http.get(`${this.BaseUrl}/genre/${id}/movies?api_key=${this.ApiKey}`)
  }
  getMovie(id: number): Observable<any> {
    return this.http.get(`${this.BaseUrl}/movie/${id}?api_key=${this.ApiKey}&append_to_response=videos,images,details,reviews,similar`)
  }
  
  getSimilarMovies(id: number): Observable<any> {
    return this.http.get(`${this.BaseUrl}/movie/${id}/similar?api_key=${this.ApiKey}`)
  }

  searchMovies(name:string):Observable<any>{
    return this.http.get(`${this.BaseUrl}/search/multi?api_key=${this.ApiKey}&query=${name}`)
  }

  getAllMovies(page: number):Observable<any>{
  return this.http.get(`${this.BaseUrl}/movie/now_playing?api_key=${this.ApiKey}&language=en-US&page=${page}`)
  }
}