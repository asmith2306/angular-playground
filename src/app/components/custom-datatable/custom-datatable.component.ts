import {Component, Input, OnInit, TemplateRef, ViewChild, ViewEncapsulation} from '@angular/core';
import {TableColumn, TableColumnProp} from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-custom-datatable',
  templateUrl: './custom-datatable.component.html',
  styleUrls: ['./custom-datatable.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CustomDatatableComponent implements OnInit {

  @Input()
  rows = [];

  @Input()
  columnDefinitions = Array<TableColumn>();

  columns = Array<TableColumn>();

  @Input()
  loading = true;

  activeRowNumber = 0;

  selected = [];

  tableMessages = {
    // Message to show when array is presented
    // but contains no values
    emptyMessage: 'No data to display',

    // Footer total message
    totalMessage: 'total',

    // Footer selected message
    // selectedMessage: 'selected'
  };

  // Row action templates
  @ViewChild('actionsTmpl', {static: true}) actionsTmpl: TemplateRef<any>;
  @ViewChild('actionMenuTmpl', {static: true}) actionMenuTmpl: TemplateRef<any>;


  constructor() {
  }

  ngOnInit() {
    const actionColumns = [
      {
        cellTemplate: this.actionsTmpl,
        headerClass: 'actions-header',
        name: 'ACTIONS',
        flexGrow: 1,
        resizeable: false,
        sortable: false,
        cellClass: 'action-buttons-cell'
      },
      {
        cellTemplate: this.actionMenuTmpl,
        headerClass: 'actions-header',
        name: 'ACTION MENU',
        flexGrow: 1,
        resizeable: false,
        sortable: false,
        cellClass: 'action-menu-cell'
      }
    ];

    this.columnDefinitions.push(...actionColumns);
    this.columns = this.columnDefinitions;

    console.log(this.columns);
  }

  onActivate(event) {
    this.activeRowNumber = event.row.id;
  }

  deactivate($event: MouseEvent) {
    this.activeRowNumber = undefined;
  }

  getRowHeight() {
    return 56;
  }

  onSelect($event: any) {

  }

  editClicked(id: number) {
    console.log('Edit row ' + id + ' clicked');
  }

  copyClicked(id: number) {
    console.log('Copy row ' + id + ' clicked');
  }

  deleteClicked(id: number) {
    console.log('Delete row ' + id + ' clicked');
  }

  openAssignmentDialog(id: number) {

  }
}
