import { Component, OnInit, Input } from '@angular/core';

import { Details } from '../details'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})

export class DetailsComponent implements OnInit {
  @Input() details: Details;

  private monthMap: any = {
    0: 'JAN',
    1: 'FEB',
    2: 'MARCH',
    3: 'APRIL',
    4: 'MAY',
    5: 'JUNE',
    6: 'JULY',
    7: 'AUG',
    8: 'SEPT',
    9: 'OCT',
    10: 'NOV',
    11: 'DEC'
  }

  private day: string = '';
  private month: string = '';
  private year: string = '';

  constructor() { }

  ngOnInit() {
  }

  toDate(str) {
    let date = new Date(Date.parse(str));
    this.day = date.getDate();
    this.month = this.monthMap[date.getMonth()];
    this.year = date.getFullYear();
    let fullDate = `${this.day} ${this.month} ${this.year}`;
    return fullDate;
  }

}
