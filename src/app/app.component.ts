import { Component, OnInit } from '@angular/core';

import { ApiDataService } from './api-data.service';

import { CruiseTileComponent } from './cruise-tile/cruise-tile.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  itineraries: any = [];

  constructor(private apiDataService: ApiDataService) { }

  ngOnInit() {
    this.apiDataService.getData().subscribe(data => {
      this.itineraries = data.data[0].attributes.itineraries;
      console.log('this.data: ', this.itineraries);
    })
  }

}
