import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Report5Component } from './report5.component';

describe('Report5Component', () => {
  let component: Report5Component;
  let fixture: ComponentFixture<Report5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Report5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Report5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
