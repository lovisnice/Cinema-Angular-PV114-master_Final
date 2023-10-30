import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICreateGenreDto, IGenre } from './movie';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GenreService
{
  private url: string;

  constructor(private http: HttpClient) {
    this.url =environment.apiUrl+'genres';
  }

  getAll(): Observable<IGenre[]> {
    return this.http.get<IGenre[]>(this.url);
  }

  getById(id: number): Observable<IGenre> {
    return this.http.get<IGenre>(`${this.url}/${id}`);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<IGenre>(`${this.url}/${id}`);
  }

  create(genre: ICreateGenreDto): Observable<any> {
    return this.http.post(`${this.url}/create`, genre);
  }
}