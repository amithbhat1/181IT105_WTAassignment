import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { appraisalComponent } from './appraisal.component';

describe('appraisalComponent', () => {
  let component: appraisalComponent;
  let fixture: ComponentFixture<appraisalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ appraisalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(appraisalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
