import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionOpportunitiesComponent } from './solution-opportunities.component';

describe('SolutionOpportunitiesComponent', () => {
  let component: SolutionOpportunitiesComponent;
  let fixture: ComponentFixture<SolutionOpportunitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolutionOpportunitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionOpportunitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
