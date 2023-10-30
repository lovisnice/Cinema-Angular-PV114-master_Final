import { Time } from "@angular/common";

export interface IMovie{
    id:number;
    title:string;
    year:number;
    imageUrl:string;
    description?: string;
    duration:string;
    // duration:Time;
    // isCurrent:boolean;
    genres?:IGenre[];
}

export interface IGenre{
    id:number;
    name:string;
}

export interface ICreateMovieDto{
    title:string;
    year:number;
    imageUrl:string;
    description?: string;
    duration:string;
    // duration:Time;
    // isCurrent:boolean;
    genreIds?:number[];
}

export interface ICreateGenreDto
{
    name:string;
}