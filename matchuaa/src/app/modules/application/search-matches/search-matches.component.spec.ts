import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMatchesComponent } from './search-matches.component';

describe('SearchMatchesComponent', () => {
  let component: SearchMatchesComponent;
  let fixture: ComponentFixture<SearchMatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchMatchesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
