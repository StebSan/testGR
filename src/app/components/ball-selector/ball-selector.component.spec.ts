import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BallSelectorComponent } from './ball-selector.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BallService } from '../../services/ball.service';
import { IBall } from '../../interfaces/Balls.interfaces';
import { of } from 'rxjs';
import { DatabusService } from '../../services/databus.service';
import { BetSlipComponent } from '../bet-slip/bet-slip.component';
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

describe('BallSelectorComponent', () => {
  let component: BallSelectorComponent;
  let fixture: ComponentFixture<BallSelectorComponent>;
  let databusSevice: DatabusService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [
        BallSelectorComponent,
        BetSlipComponent,
        ResultComponent
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BallSelectorComponent);
    component = fixture.componentInstance;
    databusSevice = fixture.debugElement.injector.get(DatabusService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getBalls from the subscription', () => {
    const ballService = fixture.debugElement.injector.get(BallService);
    const listBalls: IBall[] = []
    const spy1 = spyOn(ballService, 'getBalls').and.returnValue(of(listBalls));

    component.getBalls();
    expect(spy1).toHaveBeenCalled()
  })

  it('selectBall sendData', () => {
    const ball = listBalls[0];

    const spy = spyOn(databusSevice, 'sendData').and.callFake(() => null);
    component.selectBall(ball)
    expect(spy).toHaveBeenCalled();
  });

  it('selectBall sendData clear', () => {
    const clear = 'clear';
    const spy = spyOn(databusSevice, 'sendData').and.callFake(() => null);
    component.clearSelect()
    expect(spy).toHaveBeenCalled();
  });

});
