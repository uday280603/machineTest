import { Component, OnInit } from '@angular/core';
import { Ipost } from '../../module/Ipost';
import { postsData } from '../../const/postData';

@Component({
  selector: 'app-post-dashoard',
  templateUrl: './post-dashoard.component.html',
  styleUrls: ['./post-dashoard.component.scss']
})
export class PostDashoardComponent implements OnInit {
  postArr !: Ipost[];

  constructor() { }

  ngOnInit(): void {

    this.postArr = postsData
  }

}
