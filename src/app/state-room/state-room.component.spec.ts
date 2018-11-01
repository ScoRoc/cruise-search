import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateRoomComponent } from './state-room.component';

describe('StateRoomComponent', () => {
  let component: StateRoomComponent;
  let fixture: ComponentFixture<StateRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
