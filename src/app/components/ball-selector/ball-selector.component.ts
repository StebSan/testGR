import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { BallService } from '../../services/ball.service';
import { DatabusService } from '../../services/databus.service';
import { IBall } from '../../interfaces/Balls.interfaces';

@Component({
  selector: 'app-ball-selector',
  templateUrl: './ball-selector.component.html',
  styleUrls: ['./ball-selector.component.scss']
})
export class BallSelectorComponent implements OnInit {

  balls:any = []

  constructor(
    private ballService: BallService,
    private dataBusService: DatabusService
  ) { }

  ngOnInit(): void {
    this.getBalls()
  }


  /*
  * Trae la informacion del servicio
  */
  getBalls(){
    this.ballService.getBalls()
      .pipe(take(1))
      .subscribe(resp => {
        this.balls = resp
      })
  }

  /*
  * Envia el ball seleccionado
  * @Params ball: data tipo IBall
  */
  selectBall(ball: IBall){
    this.dataBusService.sendData(ball)
  }

  /*
  * Limpia balls seleccionadas en bet-slip
  */
  clearSelect() {
    this.dataBusService.sendData("clear")
  }

}
