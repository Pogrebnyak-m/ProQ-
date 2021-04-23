import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionsTitleComponent } from './solutions-title.component';

describe('SolutionsTitleComponent', () => {
  let component: SolutionsTitleComponent;
  let fixture: ComponentFixture<SolutionsTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolutionsTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionsTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
