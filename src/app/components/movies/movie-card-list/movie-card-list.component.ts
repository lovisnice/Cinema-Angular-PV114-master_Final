import { Component, OnInit } from '@angular/core';
import { IMovie } from '../movie';
import { MOVIES } from '../movies-mock-data';
import { HttpClient } from '@angular/common/http';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-card-list',
  templateUrl: './movie-card-list.component.html',
  styleUrls: ['./movie-card-list.component.css']
})

export class MovieCardListComponent implements OnInit {
  movies:IMovie[]=[];
  constructor(private http: HttpClient,
              private movieService:MovieService){

    // this.http.get<IMovie[]>('https://localhost:7078/api/movies').subscribe(res=>{
    //   console.log(res);
    //    this.movies=res;
    // },error=>{
    //   console.warn("Error!");
    // });
   
  }
  ngOnInit(): void {
    this.movieService.getAll().subscribe(res=>{
        console.log(res);
       this.movies=res;
    });
  }

}
