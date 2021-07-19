import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDetailsNoteComponent } from './project-details-note.component';

describe('Project1NoteComponent', () => {
  let component: ProjectDetailsNoteComponent;
  let fixture: ComponentFixture<ProjectDetailsNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectDetailsNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectDetailsNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
