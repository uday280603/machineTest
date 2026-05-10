import { Component, Input, OnInit } from '@angular/core';
import { Ipost } from '../../module/Ipost';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

   @Input() postObj !:Ipost;

  constructor() { }

  ngOnInit(): void {
  }

}
