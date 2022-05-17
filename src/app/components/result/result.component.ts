import { Component, OnInit } from '@angular/core';
import { DatabusService } from '../../services/databus.service';
import { IBall } from '../../interfaces/Balls.interfaces';
import { BallService } from '../../services/ball.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  message: string = ""
  balls: IBall[] = []
  ballResult: any
  total: number = 0

  constructor(
    private databusService: DatabusService,
    private ballService: BallService
  ) { }

  async ngOnInit() {
    await this.getBalls()
  }

  /*
  * Obtiene información bet-slip
  * manda mensaje y total si gana
  */
  getData(){
    this.databusService.getData().subscribe(resp => {
      this.ballResult = this.balls.filter(x => x.id == resp.balls.id)
      if(resp.win == true){
        this.message = "You Won"
        this.total = resp.total
      }else{
        this.message = "You Lose"
      }
    })
  }

  /*
  * Obtiene pelotas desde el service
  */
  getBalls(){
    this.ballService.getBalls()
      .subscribe(resp => {
        this.balls = resp
        this.getData()
      })
  }

  /*
  * Reinicia el juego
  */
  newGame(){
    window.location.reload()
  }

}
