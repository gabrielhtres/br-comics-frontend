import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderTopoComponent } from './slider-topo.component';

describe('SliderTopoComponent', () => {
  let component: SliderTopoComponent;
  let fixture: ComponentFixture<SliderTopoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderTopoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderTopoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
