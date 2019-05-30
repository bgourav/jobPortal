import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowinvitationsComponent } from './showinvitations.component';

describe('ShowinvitationsComponent', () => {
  let component: ShowinvitationsComponent;
  let fixture: ComponentFixture<ShowinvitationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowinvitationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowinvitationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
