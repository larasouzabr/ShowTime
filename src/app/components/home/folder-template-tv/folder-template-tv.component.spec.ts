import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderTemplateTvComponent } from './folder-template-tv.component';

describe('FolderTemplateTvComponent', () => {
  let component: FolderTemplateTvComponent;
  let fixture: ComponentFixture<FolderTemplateTvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FolderTemplateTvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FolderTemplateTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
