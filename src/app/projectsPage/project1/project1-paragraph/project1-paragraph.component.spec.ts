import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Project1ParagraphComponent } from './project1-paragraph.component';

describe('Project1ParagraphComponent', () => {
  let component: Project1ParagraphComponent;
  let fixture: ComponentFixture<Project1ParagraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Project1ParagraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Project1ParagraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
