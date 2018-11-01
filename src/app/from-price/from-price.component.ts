import { Component, OnInit, Input } from '@angular/core';

import { StateRoomService } from '../state-room.service';
import { FromPrice } from '../from-price'

@Component({
  selector: 'app-from-price',
  templateUrl: './from-price.component.html',
  styleUrls: ['./from-price.component.scss']
})
export class FromPriceComponent implements OnInit {
  @Input() fromPrice: FromPrice;
  // private details: any = this.stateRoomService.getRoom();
  private details: any = {};

  constructor(private stateRoomService: StateRoomService) { }

  ngOnInit() {
    this.getDetails();
  }

  getDetails() {
    this.details = this.stateRoomService.getRoom();
    console.log('details: ', this.details);
  }

}
