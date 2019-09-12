import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Person} from '../models/person';
import {HttpClient} from '@angular/common/http';
// @ts-ignore
import peopleData from '../../assets/data/people.json';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) {
  }

  get(): Observable<Array<Person>> {
    return of(peopleData);
  }
}
