import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportOneComponent } from './report-one.component';

describe('ReportOneComponent', () => {
  let component: ReportOneComponent;
  let fixture: ComponentFixture<ReportOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
