import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateRoomService {
  private room: any = {};

  constructor() { }

  getRoom() {
    return this.room;
  }

  setRoom(data) {
    this.room = data;
    console.log('room: ', this.room)
  }
}
