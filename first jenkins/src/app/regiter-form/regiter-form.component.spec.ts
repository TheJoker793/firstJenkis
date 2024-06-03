import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegiterFormComponent } from './regiter-form.component';

describe('RegiterFormComponent', () => {
  let component: RegiterFormComponent;
  let fixture: ComponentFixture<RegiterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegiterFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegiterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
