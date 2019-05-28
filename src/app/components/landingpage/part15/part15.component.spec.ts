import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Part15Component } from './part15.component';

describe('Part15Component', () => {
  let component: Part15Component;
  let fixture: ComponentFixture<Part15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Part15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Part15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
