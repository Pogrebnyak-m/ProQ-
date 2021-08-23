import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionContentComponent } from './solution-content.component';

describe('Solution1ContentComponent', () => {
  let component: SolutionContentComponent;
  let fixture: ComponentFixture<SolutionContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolutionContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
