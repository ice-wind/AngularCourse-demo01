import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private httpClient:HttpClient) { }

  public getFilms():Observable<any>{
    return this.httpClient.get('https://5ed74760152c310016d84d62.mockapi.io/api/films')    
  }

  getFilmById(filmId:number):Observable<any>{
    return this.httpClient.get(`https://5ed74760152c310016d84d62.mockapi.io/api/films/${filmId}`)    
  }
}
