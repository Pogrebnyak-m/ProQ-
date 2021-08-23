import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionTitleComponent } from './solution-title.component';

describe('Solution1TitleComponent', () => {
  let component: SolutionTitleComponent;
  let fixture: ComponentFixture<SolutionTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolutionTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
