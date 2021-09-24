import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Project1NoteComponent } from './project1-note.component';

describe('Project1NoteComponent', () => {
  let component: Project1NoteComponent;
  let fixture: ComponentFixture<Project1NoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Project1NoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Project1NoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
