import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Part13Component } from './part13.component';

describe('Part13Component', () => {
  let component: Part13Component;
  let fixture: ComponentFixture<Part13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Part13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Part13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
