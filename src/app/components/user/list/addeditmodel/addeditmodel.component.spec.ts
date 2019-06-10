import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditmodelComponent } from './addEditModel.component';

describe('AddeditmodelComponent', () => {
  let component: AddeditmodelComponent;
  let fixture: ComponentFixture<AddeditmodelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditmodelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
