import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ToolbarService} from '../toolbar/toolbar.service';
import {PeopleService} from '../../services/people.service';
import {Person} from '../../models/person';
import {TableColumn} from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-input-output-table',
  templateUrl: './input-output-table.component.html',
  styleUrls: ['./input-output-table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InputOutputTableComponent implements OnInit {

  inputRows: Array<Person>;
  inputColumnDefinitions = Array<TableColumn>();

  constructor(private toolbarService: ToolbarService,
              private peopleService: PeopleService) {
  }

  ngOnInit() {
    this.toolbarService.$title.next('Input/Output Table');

    this.peopleService.get().subscribe(res => {
      this.inputRows = res;
    });

    this.inputColumnDefinitions = [
      {
        name: 'Id',
        flexGrow: 1,
        resizeable: false
      },
      {
        name: 'Name',
        flexGrow: 1,
        resizeable: false
      },
      {
        name: 'Gender',
        flexGrow: 1,
        resizeable: false
      },
      {
        name: 'City',
        flexGrow: 1,
        resizeable: false,
        prop: 'address.city'
      },
      {
        name: 'Age',
        flexGrow: 1,
        resizeable: false,
        prop: 'age'
      }];
  }

  getRowHeight() {
    return 56;
  }
}
