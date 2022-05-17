import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetSlipComponent } from './bet-slip.component';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { IBall } from '../../interfaces/Balls.interfaces';
import { DatabusService } from '../../services/databus.service';
import { of } from 'rxjs';
import { BallSelectorComponent } from '../ball-selector/ball-selector.component';
import { ResultComponent } from '../result/result.component';

const listBalls: IBall[] = [
  {
    "id": 1,
    "ballNumber": 1,
    "color": "#CC433E",
    "result": false
  },
  {
    "id": 2,
    "ballNumber": 2,
    "color": "#FFF7DF",
    "result": false
  }
];

const ballOther: IBall = {
  "id": 3,
  "ballNumber": 3,
  "color": "#439D56",
  "result": false
};

describe('BetSlipComponent', () => {
  let component: BetSlipComponent;
  let fixture: ComponentFixture<BetSlipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [
        BetSlipComponent,
        BallSelectorComponent,
        ResultComponent
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BetSlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('valida menor a 5', () => {
    const res = component.changeCost(4);
    expect(component.value).toBe(5);
  });

  it('valida mayor a 5', () => {
    const data = 5
    const res = component.changeCost(data);
    expect(component.total).toBe(data * component.count);
    // this.total = money * this.count
  });

  it('findBall repetid', () => {
    const resp = component.findBall(listBalls[0], listBalls)
    expect(resp).toBe(1)
  });

  it('findBall not repetid', () => {
    const resp = component.findBall(ballOther, listBalls)
    expect(resp).toBe(0)
  });

  it('messageErr', (done) => {
    const message = 'test';

    component.messageErr(message);

    setTimeout(() => {
      expect(component.messageInformation).toBe('');
      done();
    }, 2500);

  });

  it('clearData reset values', () => {
    component.clearData()
    expect(component.balls).toBeDefined();
    expect(component.count).toBe(0);
    expect(component.total).toBe(0);
  });

  it('startGame call', () => {
    component.startGame();
    expect(component.flagStartGame).toBeTrue()
  });

  it('getData type ball', () => {
    const databusService = fixture.debugElement.injector.get(DatabusService);
    const data = ballOther;
    const spy = spyOn(databusService, 'getData').and.returnValues(of(data));

    component.getData();
  });

  it('getData type clear', () => {
    const databusService = fixture.debugElement.injector.get(DatabusService);
    const data = 'clear';
    const spy = spyOn(databusService, 'getData').and.returnValues(of(data));

    component.getData();
  });

});
