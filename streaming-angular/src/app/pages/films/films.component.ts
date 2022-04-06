import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  readonly ROOT_URL = 'https://api.themoviedb.org/3/watch/providers/tv?api_key=0cfb2866bc0135b94e1b5b4517ba1fd4&language=pt-BR';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    
  }

}
