import { Component } from '@angular/core';
import { IMovie } from '../movie';
import { ActivatedRoute } from '@angular/router';
import { MOVIES } from '../movies-mock-data';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {

  movie?: IMovie;
  // genres:string[]|undefined=[];
  genres!: string[]|undefined;
  // private route?: ActivatedRoute;
  // constructor(route: ActivatedRoute) {
  //   this.route?.params.subscribe(params => {
  //     let id = params["id"];
  //     console.log(id);
  //   })
  // }

  constructor(private route: ActivatedRoute,
    private movieService: MovieService) {
    this.route?.params.subscribe(params => {
      let id = params["id"];
      console.log(id);
      // this.movie=MOVIES.find(m=>m.id==id);   //local mock-data
      this.movieService.getById(id).subscribe(res => {
        this.movie = res;
        this.genres=this.movie?.genres?.map((g)=>g.name);
      });

    });
  }

}
