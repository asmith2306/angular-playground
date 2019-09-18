import {Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild, ViewEncapsulation} from '@angular/core';
import {TableColumn} from '@swimlane/ngx-datatable';

export interface ExtendedTableColumn extends TableColumn {
  splitProps?: Array<string>;
}

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
  columnDefinitions = Array<ExtendedTableColumn>();

  columns = Array<ExtendedTableColumn>();

  @Input()
  loading = true;

  activeRowNumber = 0;

  selected = [];

  noSelection = true;

  tableMessages = {
    // Message to show when array is presented
    // but contains no values
    emptyMessage: 'No data to display',

    // Footer total message
    totalMessage: 'total',

    // Footer selected message
    selectedMessage: 'selected'
  };

  // Split template
  @ViewChild('splitTmpl', {static: true}) splitTmpl: TemplateRef<any>;

  // Row action templates
  @ViewChild('actionsTmpl', {static: true}) actionsTmpl: TemplateRef<any>;
  @ViewChild('actionMenuTmpl', {static: true}) actionMenuTmpl: TemplateRef<any>;

  @Output()
  deleteEmitter = new EventEmitter<any[]>();

  constructor() {
  }

  ngOnInit() {
    const checkboxColumn = {
      flexGrow: 0.25,
      resizeable: false,
      sortable: false,
      checkboxable: true,
      headerCheckboxable: true
    };

    const actionColumns = [
      {
        cellTemplate: this.actionMenuTmpl,
        headerClass: 'actions-header',
        name: 'Action Menu',
        flexGrow: 0.5,
        resizeable: false,
        sortable: false,
        cellClass: 'action-menu-cell'
      }
    ];

    this.columnDefinitions.forEach(def => {
      if (def.splitProps) {
        def.cellTemplate = this.splitTmpl;
      }
    });

    this.columnDefinitions.unshift(checkboxColumn);
    this.columnDefinitions.push(...actionColumns);
    this.columns = this.columnDefinitions;

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

  onSelect({selected}) {
    this.selected = selected;
  }

  editClicked() {
    if (this.selected.length > 0) {
      console.log(this.selected[0]);
      console.log('Edit row ' + this.selected[0].id + ' clicked');
    } else {

    }
  }

  copyClicked() {
  }

  deleteClicked() {
    this.deleteEmitter.emit(this.selected);
    this.selected = [];
  }

  openAssignmentDialog(id: number) {
    console.log('Assign for row ' + id + ' clicked');
  }

  // updateFilter(event: KeyboardEvent) {
  //   const val = (event.target as HTMLInputElement).value.toLowerCase();
  //
  //   this.filteredPeople = _.cloneDeep(this.allPeople);
  //
  //   if (val.length === 0) {
  //     return;
  //   }
  //
  //   // filter our data
  //   const temp = this.filteredPeople.filter((person: Person) => {
  //     return person.age === Number(val);
  //   });
  //
  //   // update the rows
  //   this.filteredPeople = temp;
  //   // Whenever the filter changes, always go back to the first page
  //   this.table.offset = 0;
  // }
}
