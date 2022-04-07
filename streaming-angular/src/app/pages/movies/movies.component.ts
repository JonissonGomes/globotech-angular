import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: any;
  readonly ROOT_URL = 'https://api.themoviedb.org/3/trending/all/week?language=pt-BR&api_key=0cfb2866bc0135b94e1b5b4517ba1fd4&language=pt-BR';

  constructor(private http: HttpClient) { }
  ngOnInit(): void {
   this.http.get(this.ROOT_URL).subscribe(res => {
    this.movies =res
    });
  }



}
