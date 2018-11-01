import { Injectable, EventEmitter } from '@angular/core';
import { Observable, of } from 'rxjs';

import { FromPrice } from './from-price';

@Injectable({
  providedIn: 'root'
})
export class StateRoomService {
  updatedRoom:EventEmitter = new EventEmitter();
  private room: any = {};

  constructor() { }

  getRoom(): Observable<FromPrice> {
    return of(this.room);
  }

  setRoom(data) {
    this.room = data;
    this.updatedRoom.emit(this.room);
    console.log('room: ', this.room);
  }
}
