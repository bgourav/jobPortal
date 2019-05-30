import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaclistComponent } from './vaclist.component';

describe('VaclistComponent', () => {
  let component: VaclistComponent;
  let fixture: ComponentFixture<VaclistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaclistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaclistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
