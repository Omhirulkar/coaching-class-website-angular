import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Result2025Component } from './result2025.component';

describe('Result2025Component', () => {
  let component: Result2025Component;
  let fixture: ComponentFixture<Result2025Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Result2025Component]
    });
    fixture = TestBed.createComponent(Result2025Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
