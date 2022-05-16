import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bet-slip',
  templateUrl: './bet-slip.component.html',
  styleUrls: ['./bet-slip.component.scss']
})
export class BetSlipComponent implements OnInit {

  balls:any = [1,1,1,1,1,1,1,1]

  constructor() { }

  ngOnInit(): void {
  }

}
