import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgWelcomeComponent } from './msg-welcome.component';

describe('MsgWelcomeComponent', () => {
  let component: MsgWelcomeComponent;
  let fixture: ComponentFixture<MsgWelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsgWelcomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsgWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
