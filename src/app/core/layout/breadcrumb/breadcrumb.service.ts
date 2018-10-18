import { Injectable } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {

  private itemsSource = new Subject<MenuItem[]>();

  itemHandler = this.itemsSource.asObservable();

  constructor() { }

  setItems(items:MenuItem[]){
    this.itemsSource.next(items);
  }

}
