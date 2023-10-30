import { Component, Input, OnInit } from '@angular/core';
import { IMovie } from '../movie';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit{
  
  @Input()
  movie!:IMovie;
  genres:string[]|undefined=[];
  // ={ 
    //     id: 1,
  //     title: "Dune",
  //     year: 2021,
  //     imageUrl: "https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
  //     description: "Dune is a 2021 American epic science fiction film directed by Denis Villeneuve, who co-wrote the screenplay with Jon Spaihts and Eric Roth",
  //     duration: { hours: 1, minutes: 20 },
  //     genres: ["Drama", "Craim", "Action"]
  //   };
  ngOnInit(): void {
    this.genres=this.movie.genres?.map(g=>g.name);
  }
  
}
