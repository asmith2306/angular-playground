import {Component, OnInit} from '@angular/core';
import {from, Observable, of, ReplaySubject, Subject} from 'rxjs';
import {filter, map} from 'rxjs/operators';

class Person {
  constructor(public name: string, public age: number) {

  }
}

@Component({
  selector: 'app-rxjs-tester',
  templateUrl: './rxjs-tester.component.html',
  styleUrls: ['./rxjs-tester.component.scss']
})
export class RxjsTesterComponent implements OnInit {

  array = new Array<Person>();

  constructor() {
  }

  ngOnInit() {
    this.array.push(
      new Person('Alan', 34),
      new Person('John', 23),
      new Person('Mary', 19),
      new Person('Peter', 52),
      new Person('Tim', 38),
      new Person('Sally', 40)
    );

    // const $persons = new ReplaySubject();

    const $persons = from(this.array);

    // this.array.forEach(p => {
    //   $persons.next(p);
    // });


    console.log($persons);

    $persons.pipe(map((p: Person) => {
      p.age += 1;
      return p;
    }), filter((p: Person) => {
      return p.age > 20;
    })).subscribe((p: Person) => {
      console.log(p);
    });
  }
}
