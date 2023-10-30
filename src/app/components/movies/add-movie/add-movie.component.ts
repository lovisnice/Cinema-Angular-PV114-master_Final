import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { ICreateMovieDto, IGenre, IMovie } from '../movie';
import { MOVIES } from '../movies-mock-data';
import { MovieService } from '../movie.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  // movies: IMovie[] = MOVIES; //fro add new movie to localdata
  findInfo?: FormControl;
 
  movieForm!: FormGroup;
  genres!: IGenre[];

  constructor(private fb: FormBuilder,
    private movieService: MovieService,
    private router: Router) {
  }

  ngOnInit(): void {
    
    this.movieService.getGenres().subscribe(res => {
      console.log(res);
      this.genres = res;
    })

    this.movieForm = this.fb?.group({
      title: ["", [Validators.required, Validators.minLength(3)]],
      year: [new Date().getFullYear(), Validators.max(new Date().getFullYear())],
      imageUrl: "",
      description: "",
      duration: '01:30',
      genreIds: [[]]
    });
  }


  addMovie() {
    let item = this.movieForm.value as ICreateMovieDto;
    item.duration += ":00";
    console.log(item);
    
    this.movieService.create(item).subscribe(res => {
      console.log("Creating success!!!!!");
      this.router.navigate(['movies']);
 
    }
    );
  }
 
  printInfo() {
    console.log(this.findInfo?.value);
  }
}

// this.findInfo = new FormControl("find");
    //create form with FormBuilder

 // movieForm:FormGroup=new FormGroup({
  //   title:new FormControl("",[Validators.required,Validators.minLength(3)]),
  //   year:new FormControl(new Date().getFullYear(),Validators.max(new Date().getFullYear())),
  //   imageUrl: new FormControl(""),
  //   description: new FormControl(""),
  //   duration:new FormControl('01:30'),
  //   genres: new FormControl([])
  // });

 // addMovieWithParam(formFull: FormGroupDirective) {
  //   let item = this.movieForm.value;
  //   console.log(item);
  //   console.log(formFull.valid);
  //   console.log(formFull.value.year);
  //   console.log(formFull.value.genres);
  // }
  // item.id = this.movies.length + 1;
    // this.movies.push(item);  //add to local collection