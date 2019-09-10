import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {PostService} from '../../services/post.service';
import {Post} from '../../models/post';
import {DatatableComponent} from '@swimlane/ngx-datatable';
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

  allPosts: Array<Post>;
  filteredPosts: Array<Post>;

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
