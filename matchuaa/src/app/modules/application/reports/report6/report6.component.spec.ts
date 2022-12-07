import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Report6Component } from './report6.component';

describe('Report6Component', () => {
  let component: Report6Component;
  let fixture: ComponentFixture<Report6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Report6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Report6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
