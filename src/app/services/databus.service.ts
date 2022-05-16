import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabusService {

  public messageB: any = null;
  private subject:BehaviorSubject<string> = new BehaviorSubject<string>(this.messageB)

  constructor() { }

  sendData(message: string) {
    this.subject.next(message);
  }

  getData(): Observable<any> {
      return this.subject.asObservable();
  }
}
