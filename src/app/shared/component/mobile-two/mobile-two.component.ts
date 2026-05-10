import { Component, Input, OnInit } from '@angular/core';
import { Imobile } from '../../module/mobileI';

@Component({
  selector: 'app-mobile-two',
  templateUrl: './mobile-two.component.html',
  styleUrls: ['./mobile-two.component.scss']
})
export class MobileTwoComponent implements OnInit {

  @Input() mobileObj!:Imobile;

  constructor() { }

  ngOnInit(): void {
  }

}
