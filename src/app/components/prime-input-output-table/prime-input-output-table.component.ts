import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {ToolbarService} from '../toolbar/toolbar.service';
import {DecisionService} from '../../services/decision.service';
import {DecisionRow} from '../../models/decision-row';
import {Table} from 'primeng/table';
import _ from 'lodash';

@Component({
  selector: 'app-prime-input-output-table',
  templateUrl: './prime-input-output-table.component.html',
  styleUrls: ['./prime-input-output-table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PrimeInputOutputTableComponent implements OnInit {

  @ViewChild('decisionTable', {static: true})
  decisionTable: Table;

  scrollableCols = [];
  rows: Array<DecisionRow>;

  isLoading = false;

  constructor(private toolbarService: ToolbarService,
              private decisionService: DecisionService) {
  }

  ngOnInit() {
    this.toolbarService.$title.next('Prime Input/Output Table');

    this.decisionService.get().subscribe(res => {
      this.rows = res;

      this.rows[0].inputs.forEach((input, index) => {
        this.scrollableCols.push({field: input.name, header: input.name});
      });

      this.rows[0].outputs.forEach((output, index) => {
        this.scrollableCols.push({field: output.name, header: output.name});
      });

    });
  }

  getInputHeaderLength() {
    return this.rows[0].inputs.length;
  }

  getOutputHeaderLength() {
    return this.rows[0].outputs.length;
  }

  reset() {
    this.isLoading = true;
    this.rows = [...this.rows];
    // this.dataTable.reset();

    _.delay(() => {
      this.isLoading = false;
    }, 100);
  }
}
