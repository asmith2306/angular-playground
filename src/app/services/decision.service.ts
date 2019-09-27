import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
// @ts-ignore
import decisionData from '../../assets/data/decision-table.json';
import {DecisionRow} from '../models/decision-row';


@Injectable({
  providedIn: 'root'
})
export class DecisionService {

  constructor(private http: HttpClient) {
  }

  get(): Observable<Array<DecisionRow>> {
    return of(decisionData);
  }
}
