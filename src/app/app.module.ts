import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CruiseTileComponent } from './cruise-tile/cruise-tile.component';
import { MapMiniComponent } from './map-mini/map-mini.component';
import { DetailsComponent } from './details/details.component';
import { FromPriceComponent } from './from-price/from-price.component';
import { StateRoomsBoxComponent } from './state-rooms-box/state-rooms-box.component';
import { StateRoomComponent } from './state-room/state-room.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CruiseTileComponent,
    MapMiniComponent,
    DetailsComponent,
    FromPriceComponent,
    StateRoomsBoxComponent,
    StateRoomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
