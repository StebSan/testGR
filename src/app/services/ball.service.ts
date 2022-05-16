import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBall } from '../interfaces/Balls.interfaces';

@Injectable({
  providedIn: 'root'
})
export class BallService {

  constructor(
    private httpClient: HttpClient
  ) { }


  getBalls() {
    return this.httpClient.get<IBall[]>('./assets/ball.json')
  }

}
