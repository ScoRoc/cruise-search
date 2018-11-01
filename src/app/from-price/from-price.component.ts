import { Component, OnInit, Input } from '@angular/core';

import { FromPrice } from '../from-price'

@Component({
  selector: 'app-from-price',
  templateUrl: './from-price.component.html',
  styleUrls: ['./from-price.component.scss']
})
export class FromPriceComponent implements OnInit {
  @Input() fromPrice: FromPrice;

  constructor() { }

  ngOnInit() {
  }

}