import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsTitleComponent } from './projects-title.component';

describe('ProjectsTitleComponent', () => {
  let component: ProjectsTitleComponent;
  let fixture: ComponentFixture<ProjectsTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
