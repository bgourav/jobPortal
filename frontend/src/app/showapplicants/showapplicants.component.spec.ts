import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowapplicantsComponent } from './showapplicants.component';

describe('ShowapplicantsComponent', () => {
  let component: ShowapplicantsComponent;
  let fixture: ComponentFixture<ShowapplicantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowapplicantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowapplicantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
