import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDetailsParagraphComponent } from './project-details-paragraph.component';

describe('Project1ParagraphComponent', () => {
  let component: ProjectDetailsParagraphComponent;
  let fixture: ComponentFixture<ProjectDetailsParagraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectDetailsParagraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectDetailsParagraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
