import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Solution1ParagraphComponent } from './solution1-paragraph.component';

describe('Solution1ParagraphComponent', () => {
  let component: Solution1ParagraphComponent;
  let fixture: ComponentFixture<Solution1ParagraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Solution1ParagraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Solution1ParagraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
