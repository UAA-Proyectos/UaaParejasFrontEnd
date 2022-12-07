import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMatchesComponent } from './my-matches.component';

describe('MyMatchesComponent', () => {
  let component: MyMatchesComponent;
  let fixture: ComponentFixture<MyMatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyMatchesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
