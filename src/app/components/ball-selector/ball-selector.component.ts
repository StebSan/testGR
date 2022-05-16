import { Component, OnInit } from '@angular/core';
import { BallService } from '../../services/ball.service';

@Component({
  selector: 'app-ball-selector',
  templateUrl: './ball-selector.component.html',
  styleUrls: ['./ball-selector.component.scss']
})
export class BallSelectorComponent implements OnInit {

  balls:any = []

  constructor(
    private ballService: BallService
  ) { }

  ngOnInit(): void {
    this.getBalls()
  }


  getBalls(){
    this.ballService.getBalls()
      .subscribe(resp => {
        console.log("getBalls", resp);
        this.balls = resp
      })
  }

  selectBall(id:string){
    console.log("id", id);

  }

}
