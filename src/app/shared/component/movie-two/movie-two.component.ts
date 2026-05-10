import { Component, Input, OnInit } from '@angular/core';
import { Imovie } from '../../module/Imovie';
import { movieData } from '../../const/movieData';

@Component({
  selector: 'app-movie-two',
  templateUrl: './movie-two.component.html',
  styleUrls: ['./movie-two.component.scss']
})
export class MovieTwoComponent implements OnInit {

  @Input() movieObj !: Imovie;



  constructor() { }

  ngOnInit(): void {


  }

}
