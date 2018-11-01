import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FromPriceComponent } from './from-price.component';

describe('FromPriceComponent', () => {
  let component: FromPriceComponent;
  let fixture: ComponentFixture<FromPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FromPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FromPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
