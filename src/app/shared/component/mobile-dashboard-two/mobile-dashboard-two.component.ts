import { Component, OnInit } from '@angular/core';
import { Imobile } from '../../module/mobileI';
import { mobileData } from '../../const/mobileData';

@Component({
  selector: 'app-mobile-dashboard-two',
  templateUrl: './mobile-dashboard-two.component.html',
  styleUrls: ['./mobile-dashboard-two.component.scss']
})
export class MobileDashboardTwoComponent implements OnInit {

  mobileArr !: Imobile[];

  constructor() { }

  ngOnInit(): void {
    this.mobileArr=mobileData
  }

}
