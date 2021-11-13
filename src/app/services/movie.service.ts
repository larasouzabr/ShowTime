import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiKey, BaseUrl } from 'src/environments/environment';
import { map } from 'rxjs/operators'

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
  SearchMovie(query:string): Observable<any>{
    return this.http.get(`${BaseUrl}/search/movie?api_key=${ApiKey}&query=${query}`)
  }
  getMoviesByGenre(id: string): Observable<any> {
    return this.http.get(`${BaseUrl}genre/${id}/movies?api_key=${ApiKey}`)
  }
  getMovie(id: number): Observable<any> {
    return this.http.get(`${BaseUrl}/movie/${id}?api_key=${ApiKey}&append_to_response=videos,images,details,reviews,similar`)
  }
  getMovieCredits(id: string): Observable<any> {
    return this.http.get(`${BaseUrl}movie/${id}/credits?api_key=${ApiKey}`)
  }

  getMovieVideos(id: string): Observable<any> {
    return this.http.get(`${BaseUrl}movie/${id}/videos?api_key=${ApiKey}`)
  }

  getSimilarMovies(id: number): Observable<any> {
    return this.http.get(`${BaseUrl}/movie/${id}/similar?api_key=${ApiKey}`)
  }

  getPersonDetail(id: string): Observable<any> {
    return this.http.get(`${BaseUrl}person/${id}?api_key=${ApiKey}`)
  }

  getPersonExternalData(id: string) {
    return this.http.get(`${BaseUrl}person/${id}/external_ids?api_key=${ApiKey}`)
  }

  getPersonCast(id: string): Observable<any> {
    return this.http.get(`${BaseUrl}person/${id}/movie_credits?api_key=${ApiKey}`)
  }
}