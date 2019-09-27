import {Component, OnInit, TemplateRef, ViewChild, ViewEncapsulation} from '@angular/core';
import {ToolbarService} from '../toolbar/toolbar.service';
import {DatatableComponent, TableColumn} from '@swimlane/ngx-datatable';
import {DecisionService} from '../../services/decision.service';
import {DecisionRow} from '../../models/decision-row';
import * as _ from 'lodash';

export interface ExtendedTableColumn extends TableColumn {
  index?: number;
  type?: string;
}

@Component({
  selector: 'app-input-output-table',
  templateUrl: './input-output-table.component.html',
  styleUrls: ['./input-output-table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InputOutputTableComponent implements OnInit {

  rows: Array<DecisionRow>;
  columnDefinitions = Array<ExtendedTableColumn>();

  @ViewChild(DatatableComponent, {static: true})
  ngxTable: DatatableComponent;

  // Header Templates
  @ViewChild('headerTmpl', {static: true}) headerTmpl: TemplateRef<any>;

  // Column cell templates
  @ViewChild('inputValueTmpl', {static: true}) inputValueTmpl: TemplateRef<any>;
  @ViewChild('outputValueTmpl', {static: true}) outputValueTmpl: TemplateRef<any>;

  private clickedColumnIndex: number;

  constructor(private toolbarService: ToolbarService,
              private decisionService: DecisionService) {
  }

  ngOnInit() {
    this.toolbarService.$title.next('Input/Output Table');

    this.decisionService.get().subscribe(res => {
      this.rows = res;

      this.columnDefinitions = [
        {
          name: 'Comment',
          flexGrow: 1.5,
          resizeable: false,
          frozenLeft: false,
          cellClass: 'comment-cell'
        }];

      this.rows[0].inputs.forEach((input, index) => {
        this.columnDefinitions.push(
          {
            name: input.name,
            type: input.type,
            flexGrow: 1,
            resizeable: true,
            cellTemplate: this.inputValueTmpl,
            headerTemplate: this.headerTmpl,
            comparator: this.comparator.bind(this),
            index
          }
        );
      });
      this.rows[0].outputs.forEach((output, index) => {
        this.columnDefinitions.push(
          {
            name: output.name,
            type: output.type,
            flexGrow: 1,
            resizeable: true,
            cellTemplate: this.outputValueTmpl,
            headerTemplate: this.headerTmpl,
            comparator: this.comparator.bind(this),
            index
          }
        );
      });
    });
  }

  getRowHeight() {
    return 65;
  }

  comparator(valueA, valueB, rowA, rowB) {
    _.delay(() => {
      console.log(this.clickedColumnIndex);
      console.log('Sorting Comparator', rowA, rowB);
    }, 100);
  }

  setColumnIndex(column: ExtendedTableColumn) {
    this.clickedColumnIndex = column.index;
  }
}
