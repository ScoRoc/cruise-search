import { Component, Input } from '@angular/core';

import { Itinerary } from '../itinerary';

@Component({
  selector: 'app-cruise-tile',
  templateUrl: './cruise-tile.component.html',
  styleUrls: ['./cruise-tile.component.scss']
})
export class CruiseTileComponent {
  @Input() itinerary: Itinerary;

  constructor() { }

  ngOnInit() {
  }

}
