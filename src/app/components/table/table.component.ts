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
  @ViewChild('userIdHeaderTmpl', {static: true}) userIdHeaderTmpl: TemplateRef<any>;
  @ViewChild('userIdTmpl', {static: true}) userIdTmpl: TemplateRef<any>;

  @ViewChild('idHeaderTmpl', {static: true}) idHeaderTmpl: TemplateRef<any>;
  @ViewChild('idTmpl', {static: true}) idTmpl: TemplateRef<any>;

  @ViewChild('titleHeaderTmpl', {static: true}) titleHeaderTmpl: TemplateRef<any>;
  @ViewChild('titleTmpl', {static: true}) titleTmpl: TemplateRef<any>;

  @ViewChild('bodyHeaderTmpl', {static: true}) bodyHeaderTmpl: TemplateRef<any>;
  @ViewChild('bodyTmpl', {static: true}) bodyTmpl: TemplateRef<any>;

  // Person templates
  @ViewChild('personIdHeaderTmpl', {static: true}) personIdHeaderTmpl: TemplateRef<any>;
  @ViewChild('personIdTmpl', {static: true}) personIdTmpl: TemplateRef<any>;

  @ViewChild('personNameHeaderTmpl', {static: true}) personNameHeaderTmpl: TemplateRef<any>;
  @ViewChild('personNameTmpl', {static: true}) personNameTmpl: TemplateRef<any>;

  @ViewChild('personGenderHeaderTmpl', {static: true}) personGenderHeaderTmpl: TemplateRef<any>;
  @ViewChild('personGenderTmpl', {static: true}) personGenderTmpl: TemplateRef<any>;

  @ViewChild('personAgeHeaderTmpl', {static: true}) personAgeHeaderTmpl: TemplateRef<any>;
  @ViewChild('personAgeTmpl', {static: true}) personAgeTmpl: TemplateRef<any>;

  // Row action templates
  @ViewChild('actionsHeaderTmpl', {static: true}) actionsHeaderTmpl: TemplateRef<any>;
  @ViewChild('actionsTmpl', {static: true}) actionsTmpl: TemplateRef<any>;

  @ViewChild('actionMenuHeaderTmpl', {static: true}) actionMenuHeaderTmpl: TemplateRef<any>;
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
        headerTemplate: this.userIdHeaderTmpl,
        cellTemplate: this.userIdTmpl,
        name: 'USER ID',
        flexGrow: 1,
        resizeable: false
      },
      {
        headerTemplate: this.idHeaderTmpl,
        cellTemplate: this.idTmpl,
        name: 'ID',
        flexGrow: 1,
        resizeable: false
      },
      {
        headerTemplate: this.titleHeaderTmpl,
        cellTemplate: this.titleTmpl,
        name: 'TITLE',
        flexGrow: 3,
        resizeable: false
      },
      {
        headerTemplate: this.bodyHeaderTmpl,
        cellTemplate: this.bodyTmpl,
        name: 'BODY',
        flexGrow: 3,
        resizeable: false
      },
      {
        headerTemplate: this.actionsHeaderTmpl,
        cellTemplate: this.actionsTmpl,
        headerClass: 'actions-header',
        name: 'ACTIONS',
        flexGrow: 2,
        resizeable: false
      },
      {
        headerTemplate: this.actionMenuHeaderTmpl,
        cellTemplate: this.actionMenuTmpl,
        headerClass: 'actions-header',
        name: 'ACTION MENU',
        flexGrow: 2,
        resizeable: false
      }
    ];

    this.peopleColumns = [
      {
        headerTemplate: this.personIdHeaderTmpl,
        cellTemplate: this.personIdTmpl,
        name: 'ID',
        flexGrow: 1,
        resizeable: false
      },
      {
        headerTemplate: this.personNameHeaderTmpl,
        cellTemplate: this.personNameTmpl,
        name: 'NAME',
        flexGrow: 2,
        resizeable: false
      },
      {
        headerTemplate: this.personGenderHeaderTmpl,
        cellTemplate: this.personGenderTmpl,
        name: 'GENDER',
        flexGrow: 2,
        resizeable: false
      },
      {
        headerTemplate: this.personAgeHeaderTmpl,
        cellTemplate: this.personAgeTmpl,
        name: 'AGE',
        flexGrow: 1,
        resizeable: false
      },
      {
        headerTemplate: this.actionsHeaderTmpl,
        cellTemplate: this.actionsTmpl,
        headerClass: 'actions-header',
        name: 'ACTIONS',
        flexGrow: 1,
        resizeable: false
      },
      {
        headerTemplate: this.actionMenuHeaderTmpl,
        cellTemplate: this.actionMenuTmpl,
        headerClass: 'actions-header',
        name: 'ACTION MENU',
        flexGrow: 1,
        resizeable: false
      }
    ];
  }

  // updateFilter(event: KeyboardEvent) {
  //   const val = (event.target as HTMLInputElement).value.toLowerCase();
  //
  //   this.filteredPosts = _.cloneDeep(this.allPosts);
  //
  //   if (val.length === 0) {
  //     return;
  //   }
  //
  //   // filter our data
  //   const temp = this.filteredPosts.filter((post: Post) => {
  //     return post.id === Number(val);
  //   });
  //
  //   // update the rows
  //   this.filteredPosts = temp;
  //   // Whenever the filter changes, always go back to the first page
  //   this.table.offset = 0;
  // }

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
