import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Solution1ContentComponent } from './solution1-content.component';

describe('Solution1ContentComponent', () => {
  let component: Solution1ContentComponent;
  let fixture: ComponentFixture<Solution1ContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Solution1ContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Solution1ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
