import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderEditorasComponent } from './slider-editoras.component';

describe('SliderEditorasComponent', () => {
  let component: SliderEditorasComponent;
  let fixture: ComponentFixture<SliderEditorasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderEditorasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderEditorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
