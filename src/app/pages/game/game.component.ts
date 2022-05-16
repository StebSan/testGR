import { Component, OnInit } from '@angular/core';
import { DatabusService } from '../../services/databus.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  result: boolean = false

  constructor(
    private databusService: DatabusService
  ) { }

  ngOnInit(): void {
    this.getData()
  }


  getData(){
    this.databusService.getData().subscribe(resp => {
      if(resp != null){
        if(resp.win == true || resp.win == false){
          this.result = true
        }
      }
    })
  }

}
