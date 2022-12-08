import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Report7Component } from './report7.component';

describe('Report7Component', () => {
  let component: Report7Component;
  let fixture: ComponentFixture<Report7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Report7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Report7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
