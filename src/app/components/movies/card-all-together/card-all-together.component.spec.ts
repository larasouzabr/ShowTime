import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAllTogetherComponent } from './card-all-together.component';

describe('CardAllTogetherComponent', () => {
  let component: CardAllTogetherComponent;
  let fixture: ComponentFixture<CardAllTogetherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardAllTogetherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAllTogetherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
