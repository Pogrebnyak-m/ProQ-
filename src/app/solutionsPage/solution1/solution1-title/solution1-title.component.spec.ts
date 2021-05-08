import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Solution1TitleComponent } from './solution1-title.component';

describe('Solution1TitleComponent', () => {
  let component: Solution1TitleComponent;
  let fixture: ComponentFixture<Solution1TitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Solution1TitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Solution1TitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
