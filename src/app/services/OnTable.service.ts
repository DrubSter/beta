import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OnTableService {
public count$ = new Subject<boolean>();
public changeCount(count: boolean) {
  this.count$.next(count);
}
constructor() {}

}
