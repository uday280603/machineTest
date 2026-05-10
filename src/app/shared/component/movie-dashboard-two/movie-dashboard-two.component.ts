import { Component, OnInit } from '@angular/core';
import { Imovie } from '../../module/Imovie';
import { movieData } from '../../const/movieData';

@Component({
  selector: 'app-movie-dashboard-two',
  templateUrl: './movie-dashboard-two.component.html',
  styleUrls: ['./movie-dashboard-two.component.scss']
})
export class MovieDashboardTwoComponent implements OnInit {

    moviesArr !: Imovie[];

  constructor() { }

  ngOnInit(): void {

        this.moviesArr = movieData;
  }

}
