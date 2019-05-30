import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobinfoComponent } from './jobinfo.component';

describe('JobinfoComponent', () => {
  let component: JobinfoComponent;
  let fixture: ComponentFixture<JobinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
