import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgGlassmorphismComponent } from './ng-glassmorphism.component';

describe('NgGlassmorphismComponent', () => {
  let component: NgGlassmorphismComponent;
  let fixture: ComponentFixture<NgGlassmorphismComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgGlassmorphismComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgGlassmorphismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
