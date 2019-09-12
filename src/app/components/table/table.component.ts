import {AfterViewInit, Component, OnInit, TemplateRef, ViewChild, ViewEncapsulation} from '@angular/core';
import {PostService} from '../../services/post.service';
import {Post} from '../../models/post';
import {DatatableComponent, TableColumn} from '@swimlane/ngx-datatable';
import * as _ from 'lodash';
import {MatDialog} from '@angular/material';
import {AssignmentDialogComponent} from '../../dialogs/assignment-dialog/assignment-dialog.component';
import {MatSnackBarService} from '../../services/mat-snackbar.service';
import {PeopleService} from '../../services/people.service';
import {Person} from '../../models/person';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TableComponent implements OnInit {

  @ViewChild(DatatableComponent, {static: false})
  table: DatatableComponent;

  // Post templates
  @ViewChild('userIdTmpl', {static: true}) userIdTmpl: TemplateRef<any>;
  @ViewChild('idTmpl', {static: true}) idTmpl: TemplateRef<any>;
  @ViewChild('titleTmpl', {static: true}) titleTmpl: TemplateRef<any>;
  @ViewChild('bodyTmpl', {static: true}) bodyTmpl: TemplateRef<any>;

  // Person templates
  @ViewChild('personIdTmpl', {static: true}) personIdTmpl: TemplateRef<any>;
  @ViewChild('personNameTmpl', {static: true}) personNameTmpl: TemplateRef<any>;
  @ViewChild('personGenderTmpl', {static: true}) personGenderTmpl: TemplateRef<any>;
  @ViewChild('personAgeTmpl', {static: true}) personAgeTmpl: TemplateRef<any>;

  // Row action templates
  @ViewChild('actionsTmpl', {static: true}) actionsTmpl: TemplateRef<any>;
  @ViewChild('actionMenuTmpl', {static: true}) actionMenuTmpl: TemplateRef<any>;

  allPosts: Array<Post>;
  filteredPosts: Array<Post>;
  postColumns = Array<TableColumn>();

  allPeople: Array<Person>;
  filteredPeople: Array<Person>;
  peopleColumns = Array<TableColumn>();

  selected = [];

  loading = true;

  tableMessages = {
    // Message to show when array is presented
    // but contains no values
    emptyMessage: 'No data to display',

    // Footer total message
    totalMessage: 'total',

    // Footer selected message
    // selectedMessage: 'selected'
  };

  constructor(private postService: PostService,
              private peopleService: PeopleService,
              public dialog: MatDialog,
              private matSnackBarService: MatSnackBarService) {
  }

  ngOnInit() {

    this.postService.getAll().subscribe(res => {
      this.allPosts = res;
      this.filteredPosts = res;
      this.loading = false;
    });

    this.peopleService.get().subscribe(res => {
      this.allPeople = res;
      this.filteredPeople = res;
      this.loading = false;
    });

    this.postColumns = [
      {
        cellTemplate: this.userIdTmpl,
        name: 'USER ID',
        flexGrow: 1,
        resizeable: false
      },
      {
        cellTemplate: this.idTmpl,
        name: 'ID',
        flexGrow: 1,
        resizeable: false
      },
      {
        cellTemplate: this.titleTmpl,
        name: 'TITLE',
        flexGrow: 3,
        resizeable: false
      },
      {
        cellTemplate: this.bodyTmpl,
        name: 'BODY',
        flexGrow: 3,
        resizeable: false
      },
      {
        cellTemplate: this.actionsTmpl,
        headerClass: 'actions-header',
        name: 'ACTIONS',
        flexGrow: 2,
        resizeable: false
      },
      {
        cellTemplate: this.actionMenuTmpl,
        headerClass: 'actions-header',
        name: 'ACTION MENU',
        flexGrow: 2,
        resizeable: false
      }
    ];

    this.peopleColumns = [
      {
        cellTemplate: this.personIdTmpl,
        name: 'ID',
        flexGrow: 1,
        resizeable: false
      },
      {
        cellTemplate: this.personNameTmpl,
        name: 'NAME',
        flexGrow: 2,
        resizeable: false
      },
      {
        cellTemplate: this.personGenderTmpl,
        name: 'GENDER',
        flexGrow: 2,
        resizeable: false
      },
      {
        cellTemplate: this.personAgeTmpl,
        name: 'AGE',
        flexGrow: 1,
        resizeable: false
      },
      {
        cellTemplate: this.actionsTmpl,
        headerClass: 'actions-header',
        name: 'ACTIONS',
        flexGrow: 1,
        resizeable: false,
        sortable: false
      },
      {
        cellTemplate: this.actionMenuTmpl,
        headerClass: 'actions-header',
        name: 'ACTION MENU',
        flexGrow: 1,
        resizeable: false,
        sortable: false
      }
    ];
  }

  updateFilter(event: KeyboardEvent) {
    const val = (event.target as HTMLInputElement).value.toLowerCase();

    this.filteredPeople = _.cloneDeep(this.allPeople);

    if (val.length === 0) {
      return;
    }

    // filter our data
    const temp = this.filteredPeople.filter((person: Person) => {
      return person.age === Number(val);
    });

    // update the rows
    this.filteredPeople = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  onSelect({selected}) {
    console.log('Select Event', selected, this.selected);

    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }

  onActivate(event) {
    console.log('Activate Event', event);
  }

  editClicked(id: number) {
    this.matSnackBarService.open('Edit row ' + id + ' clicked');
  }

  copyClicked(id: number) {
    this.matSnackBarService.open('Copy row ' + id + ' clicked');
  }

  deleteClicked(id: number) {
    this.matSnackBarService.open('Delete row ' + id + ' clicked');
  }

  openAssignmentDialog(id: number) {
    const dialogRef = this.dialog.open(AssignmentDialogComponent, {
      width: '400px',
      data: {id}
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }

  getRowHeight(): number {
    return 80;
  }
}
