import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultComponent } from './result.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BallService } from '../../services/ball.service';
import { IBall } from '../../interfaces/Balls.interfaces';
import { of } from 'rxjs';
import { DatabusService } from '../../services/databus.service';
import { BallSelectorComponent } from '../ball-selector/ball-selector.component';
import { BetSlipComponent } from '../bet-slip/bet-slip.component';

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

const ballOther = {
  win: true,
  total: 55,
  balls: {
    "id": 3,
    "ballNumber": 3,
    "color": "#439D56",
    "result": false
  }
}
const ballOtherFalse = {
  win: false,
  total: 55,
  balls: {
    "id": 3,
    "ballNumber": 3,
    "color": "#439D56",
    "result": false
  }
}

describe('ResultComponent', () => {
  let component: ResultComponent;
  let fixture: ComponentFixture<ResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [
        ResultComponent,
        BallSelectorComponent,
        BetSlipComponent
       ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getBalls call', () => {
    const ballService = fixture.debugElement.injector.get(BallService);
    const _listBalls: IBall[] = listBalls
    const spy = spyOn(ballService, 'getBalls').and.returnValues(of(_listBalls));

    const databusService = fixture.debugElement.injector.get(DatabusService);
    const dataBall = ballOther;
    const spyBus = spyOn(databusService, 'getData').and.returnValues(of(dataBall));

    component.getData();
    component.getBalls();

    expect(spy).toHaveBeenCalled();
  });

  it('getData call', () => {
    const databusService = fixture.debugElement.injector.get(DatabusService);
    const dataBallFalse = ballOtherFalse;
    const spyBusFalse = spyOn(databusService, 'getData').and.returnValues(of(dataBallFalse));

    component.getData();

    expect(spyBusFalse).toHaveBeenCalled();
  });

});
