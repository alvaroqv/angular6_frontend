import { Injectable} from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DelayResolve implements Resolve<Observable<any>> {

  constructor() {
  }

  public resolve(): Observable<number> {
    return timer(1000);
   }
}