import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Solution1ListComponent } from './solution1-list.component';

describe('Solution1ListComponent', () => {
  let component: Solution1ListComponent;
  let fixture: ComponentFixture<Solution1ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Solution1ListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Solution1ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
