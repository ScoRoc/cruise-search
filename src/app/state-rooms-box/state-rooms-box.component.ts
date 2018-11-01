import { Component, OnInit, Input } from '@angular/core';

import { StateRooms } from '../state-rooms';
import { FromPrice } from '../from-price';

@Component({
  selector: 'app-state-rooms-box',
  templateUrl: './state-rooms-box.component.html',
  styleUrls: ['./state-rooms-box.component.scss']
})
export class StateRoomsBoxComponent implements OnInit {
  @Input() stateRooms: StateRooms;
  @Input() fromPrice: FromPrice;
  @Input() currencySymbol: string;

  constructor() { }

  ngOnInit() {
  }

}
