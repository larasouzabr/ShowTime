import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiKey, BaseUrl } from 'src/environments/environment';
import { map } from 'rxjs/operators'
import { MovieResults } from '../dtos/Movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(
  private http: HttpClient
  ) {}

  getMovies(type: string, page: number): Observable<any> {
    return this.http.get(`${BaseUrl}movie/${type}?api_key=${ApiKey}&page=${page}`)
  }
  getPopularMovies(): Observable<any> {
    return this.http.get(`${BaseUrl}/movie/popular?api_key=${ApiKey}`)
  }
  getUpcomingMovies(): Observable<any>{
    return this.http.get(`${BaseUrl}/movie/upcoming?api_key=${ApiKey}`)
  }  
  getTopRatedMovies(): Observable<any>{
    return this.http.get(`${BaseUrl}/movie/top_rated?api_key=${ApiKey}`)
  }
  getNowPlayingMovies(): Observable<any>{
    return this.http.get(`${BaseUrl}/movie/now_playing?api_key=${ApiKey}`)
  }
  getMovieGenres(): Observable<any>{
    return this.http.get(`${BaseUrl}/genre/movie/list?api_key=${ApiKey}`)
  }
  getMoviesByGenre(id:number): Observable<any> {
    return this.http.get(`${BaseUrl}/genre/${id}/movies?api_key=${ApiKey}`)
  }
  getMovie(id: number): Observable<any> {
    return this.http.get(`${BaseUrl}/movie/${id}?api_key=${ApiKey}&append_to_response=videos,images,details,reviews,similar`)
  }
  
  getSimilarMovies(id: number): Observable<any> {
    return this.http.get(`${BaseUrl}/movie/${id}/similar?api_key=${ApiKey}`)
  }

  searchMovies(name:string):Observable<any>{
    return this.http.get(`${BaseUrl}/search/multi?api_key=${ApiKey}&query=${name}`)
  }

  getAllMovies(page: number):Observable<any>{
  return this.http.get(`${BaseUrl}/movie/now_playing?api_key=${ApiKey}&language=en-US&page=${page}`)
  }
}