import {Component, OnInit} from '@angular/core';
import {Person} from '../../models/person';
import {PeopleService} from '../../services/people.service';
import {Post} from '../../models/post';
import {ExtendedTableColumn} from '../custom-datatable/custom-datatable.component';
import {ToolbarService} from '../toolbar/toolbar.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './people-catalog.component.html',
  styleUrls: ['./people-catalog.component.scss']
})
export class PeopleCatalogComponent implements OnInit {

  allPeople: Array<Person>;
  columnDefinitions = Array<ExtendedTableColumn>();

  tableLoading = true;

  constructor(private peopleService: PeopleService,
              private toolbarService: ToolbarService) {
  }

  ngOnInit() {
    this.toolbarService.$title.next('People');

    this.peopleService.get().subscribe(res => {
      this.allPeople = res;
      this.tableLoading = false;
    });

    this.columnDefinitions = [
      {
        name: 'Id',
        flexGrow: 0.25,
        resizeable: false
      },
      {
        name: 'Name',
        flexGrow: 0.8,
        resizeable: false
      },
      {
        name: 'Gender',
        flexGrow: 0.5,
        resizeable: false
      },
      {
        name: 'Address',
        flexGrow: 0.8,
        resizeable: false,
        splitProps: ['city', 'state']
      },
      {
        name: 'Age',
        flexGrow: 0.2,
        resizeable: false,
        prop: 'age'
      }];

  }

  deletePeople(people: Array<Person>) {
    if (people.length > 1) {
      this.allPeople = this.allPeople.filter(i => !people.map(j => j.id).includes(i.id));
    } else {
      this.allPeople = this.allPeople.filter(person => person.id !== people[0].id);
    }
  }
}
