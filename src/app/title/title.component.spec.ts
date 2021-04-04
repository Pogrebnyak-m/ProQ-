import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstTitleComponent } from './title.component';

describe('FirstTitleComponent', () => {
  let component: FirstTitleComponent;
  let fixture: ComponentFixture<FirstTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
