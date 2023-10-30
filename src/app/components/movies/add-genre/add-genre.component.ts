
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { GenreService } from '../genre.service';
import { IGenre,ICreateGenreDto } from '../movie';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-genre',
  templateUrl: './add-genre.component.html',
  styleUrls: ['./add-genre.component.css']
})
export class AddGenreComponent implements OnInit{
  findInfo?: FormControl;
 
  genreForm!: FormGroup;
  genre?: IGenre;

  constructor(private fb: FormBuilder,
    private genreService: GenreService,
    private router: Router) {
  }

  ngOnInit(): void {
    
    this.genreService.getAll().subscribe(res => {
      console.log(res);
    })

    this.genreForm = this.fb?.group({
      title: ["", [Validators.required, Validators.minLength(3)]],
    });
  }


  addGenre() {
    let item = this.genreForm.value as ICreateGenreDto;
    console.log(item);
    
    this.genreService.create(item).subscribe(res => {
      console.log("Creating success!!!!!");
      this.router.navigate(['genre']);
 
    }
    );
  }
 
  printInfo() {
    console.log(this.findInfo?.value);
  }
}
