import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateRoomsBoxComponent } from './state-rooms-box.component';

describe('StateRoomsBoxComponent', () => {
  let component: StateRoomsBoxComponent;
  let fixture: ComponentFixture<StateRoomsBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateRoomsBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateRoomsBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
