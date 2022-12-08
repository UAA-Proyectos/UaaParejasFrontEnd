import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Report10Component } from './report10.component';

describe('Report10Component', () => {
  let component: Report10Component;
  let fixture: ComponentFixture<Report10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Report10Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Report10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
