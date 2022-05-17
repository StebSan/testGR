import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameComponent } from './game.component';
import { DatabusService } from '../../services/databus.service';
import { of } from 'rxjs';
import { BallSelectorComponent } from '../../components/ball-selector/ball-selector.component';
import { BetSlipComponent } from '../../components/bet-slip/bet-slip.component';
import { ResultComponent } from '../../components/result/result.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;
  let databusSevice: DatabusService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule
      ],
      declarations: [
        GameComponent,
        BallSelectorComponent,
        BetSlipComponent,
        ResultComponent
       ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getData call null', () => {
    const databusService = fixture.debugElement.injector.get(DatabusService);
    const data = null
    const spy = spyOn(databusService, 'getData').and.returnValues(of(data));

    component.getData();

    expect(spy).toHaveBeenCalled();
  });

  it('getData call boolean', () => {
    const databusService = fixture.debugElement.injector.get(DatabusService);
    const dataWinTrue = {
      win: true
    }
    const spyWin = spyOn(databusService, 'getData').and.returnValues(of(dataWinTrue));

    component.getData();

    expect(spyWin).toHaveBeenCalled();
    expect(component.result).toBeTrue()
  });

});
