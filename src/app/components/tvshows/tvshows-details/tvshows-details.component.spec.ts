import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvshowsDetailsComponent } from './tvshows-details.component';

describe('TvshowsDetailsComponent', () => {
  let component: TvshowsDetailsComponent;
  let fixture: ComponentFixture<TvshowsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvshowsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvshowsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
