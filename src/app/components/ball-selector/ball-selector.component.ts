import { Component, OnInit } from '@angular/core';
import { BallService } from '../../services/ball.service';
import { DatabusService } from '../../services/databus.service';

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


  getBalls(){
    this.ballService.getBalls()
      .subscribe(resp => {
        this.balls = resp
      })
  }

  selectBall(item:string){
    this.dataBusService.sendData(item)
  }

  clearSelect() {
    this.dataBusService.sendData("clear")
  }

}
