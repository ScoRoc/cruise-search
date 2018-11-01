import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CruiseTileComponent } from './cruise-tile.component';

describe('CruiseTileComponent', () => {
  let component: CruiseTileComponent;
  let fixture: ComponentFixture<CruiseTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CruiseTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CruiseTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
