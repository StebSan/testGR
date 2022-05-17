import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBall } from '../interfaces/Balls.interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BallService {

  constructor(
    private httpClient: HttpClient
  ) { }


  /*
  * Funcions que obtiene las esferas
  */
  getBalls(): Observable<IBall[]> {
    return this.httpClient.get<IBall[]>('./assets/ball.json')
  }

}
