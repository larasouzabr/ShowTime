import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderTemplateComponent } from './folder-template.component';

describe('FolderTemplateComponent', () => {
  let component: FolderTemplateComponent;
  let fixture: ComponentFixture<FolderTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FolderTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FolderTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
