import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-msg-welcome',
  templateUrl: './msg-welcome.component.html',
  styleUrls: ['./msg-welcome.component.scss']
})
export class MsgWelcomeComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goGame() {
    this.router.navigate(['/game'])
  }

}
