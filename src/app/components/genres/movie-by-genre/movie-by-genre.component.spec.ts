import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieByGenreComponent } from './movie-by-genre.component';

describe('MovieByGenreComponent', () => {
  let component: MovieByGenreComponent;
  let fixture: ComponentFixture<MovieByGenreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieByGenreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieByGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
