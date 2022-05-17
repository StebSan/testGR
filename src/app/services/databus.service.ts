import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabusService {

  public messageB: any = null;
  private subject:BehaviorSubject<string> = new BehaviorSubject<string>(this.messageB)

  constructor() { }

  /*
   * Funcion para enviar información
  */
  sendData(data: any): void {
    this.subject.next(data);
  }

  /*
   * Funcion para recibir la informacion enviada
  */
  getData(): Observable<any> {
      return this.subject.asObservable();
  }
}
