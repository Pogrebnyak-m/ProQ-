import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Project1ListComponent } from './project1-list.component';

describe('Project1ListComponent', () => {
  let component: Project1ListComponent;
  let fixture: ComponentFixture<Project1ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Project1ListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Project1ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
