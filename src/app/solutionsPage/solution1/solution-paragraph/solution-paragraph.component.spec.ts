import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionParagraphComponent } from './solution-paragraph.component';

describe('Solution1ParagraphComponent', () => {
  let component: SolutionParagraphComponent;
  let fixture: ComponentFixture<SolutionParagraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolutionParagraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionParagraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
