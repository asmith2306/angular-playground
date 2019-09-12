import {Component, OnInit, TemplateRef, ViewChild, ViewEncapsulation} from '@angular/core';
import {PostService} from '../../services/post.service';
import {Post} from '../../models/post';
import {DatatableComponent, TableColumn} from '@swimlane/ngx-datatable';
import * as _ from 'lodash';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TableComponent implements OnInit {

  @ViewChild(DatatableComponent, {static: false})
  table: DatatableComponent;

  @ViewChild('userIdHeaderTmpl', {static: true}) userIdHeaderTmpl: TemplateRef<any>;
  @ViewChild('userIdTmpl', {static: true}) userIdTmpl: TemplateRef<any>;

  @ViewChild('idHeaderTmpl', {static: true}) idHeaderTmpl: TemplateRef<any>;
  @ViewChild('idTmpl', {static: true}) idTmpl: TemplateRef<any>;

  @ViewChild('titleHeaderTmpl', {static: true}) titleHeaderTmpl: TemplateRef<any>;
  @ViewChild('titleTmpl', {static: true}) titleTmpl: TemplateRef<any>;

  @ViewChild('bodyHeaderTmpl', {static: true}) bodyHeaderTmpl: TemplateRef<any>;
  @ViewChild('bodyTmpl', {static: true}) bodyTmpl: TemplateRef<any>;

  @ViewChild('actionsHeaderTmpl', {static: true}) actionsHeaderTmpl: TemplateRef<any>;
  @ViewChild('actionsTmpl', {static: true}) actionsTmpl: TemplateRef<any>;

  allPosts: Array<Post>;
  filteredPosts: Array<Post>;

  columns = Array<TableColumn>();

  selected = [];

  loading = true;

  constructor(private postService: PostService) {
  }

  ngOnInit() {
    this.postService.getAll().subscribe(res => {
      this.allPosts = res;
      this.filteredPosts = res;
      this.loading = false;
    });

    this.columns = [
      {
        headerTemplate: this.userIdHeaderTmpl,
        cellTemplate: this.userIdTmpl,
        name: 'User ID',
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
      }
    ];

  }

  updateFilter(event: KeyboardEvent) {
    const val = (event.target as HTMLInputElement).value.toLowerCase();

    this.filteredPosts = _.cloneDeep(this.allPosts);

    if (val.length === 0) {
      return;
    }

    // filter our data
    const temp = this.filteredPosts.filter((post: Post) => {
      return post.id === Number(val);
    });

    // update the rows
    this.filteredPosts = temp;
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
}
