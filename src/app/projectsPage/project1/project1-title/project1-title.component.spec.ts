import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Project1TitleComponent } from './project1-title.component';

describe('Project1TitleComponent', () => {
  let component: Project1TitleComponent;
  let fixture: ComponentFixture<Project1TitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Project1TitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Project1TitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
