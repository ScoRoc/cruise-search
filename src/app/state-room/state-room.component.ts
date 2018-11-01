import { Component, OnInit, Input } from '@angular/core';

import { StateRoom } from '../state-room'

@Component({
  selector: 'app-state-room',
  templateUrl: './state-room.component.html',
  styleUrls: ['./state-room.component.scss']
})
export class StateRoomComponent implements OnInit {
  @Input() stateRoom: StateRoom;
  @Input() currencySymbol: string;

  constructor() { }

  ngOnInit() {
  }

}
