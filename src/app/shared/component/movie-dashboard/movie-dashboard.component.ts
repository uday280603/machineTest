import { Component, OnInit } from '@angular/core';
import { Imovie } from '../../module/Imovie';
import { movieData } from '../../const/movieData';

@Component({
  selector: 'app-movie-dashboard',
  templateUrl: './movie-dashboard.component.html',
  styleUrls: ['./movie-dashboard.component.scss']
})
export class MovieDashboardComponent implements OnInit {

   movieArr:Array<Imovie>=[];

  constructor() { }

  ngOnInit(): void {
    this.movieArr = movieData;
  }

}
