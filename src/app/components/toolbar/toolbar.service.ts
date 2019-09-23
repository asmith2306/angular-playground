import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToolbarService {

  $title = new BehaviorSubject<string>(null);
  $showBackButton = new BehaviorSubject<boolean>(null);
  $rhsTool = new BehaviorSubject<any>(null);

  constructor() {
  }

  reset() {
    this.$title.next('');
    this.$showBackButton.next(false);
  }
}
