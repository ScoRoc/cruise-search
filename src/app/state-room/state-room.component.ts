import { Component, OnInit, Input } from '@angular/core';

import { StateRoomService } from '../state-room.service';
import { StateRoom } from '../state-room'

@Component({
  selector: 'app-state-room',
  templateUrl: './state-room.component.html',
  styleUrls: ['./state-room.component.scss']
})
export class StateRoomComponent implements OnInit {
  @Input() stateRoom: StateRoom;
  @Input() currencySymbol: string;
  @Input() idx: number;

  private selected: string = '';

  constructor(private stateRoomService: StateRoomService) { }

  ngOnInit() {
  }

  toUpper(str) {
    return str.toUpperCase();
  }

  // handleClick (e) {
  //   this.selected = e.target.value;
  //   console.log(this.selected);
  //   console.log(e.target)
  // }

  handleClick(data) {
    this.stateRoomService.setRoom(data);
  }

}
