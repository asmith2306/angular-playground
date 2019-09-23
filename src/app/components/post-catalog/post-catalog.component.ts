import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {PostService} from '../../services/post.service';
import {Post} from '../../models/post';
import {ExtendedTableColumn} from '../custom-datatable/custom-datatable.component';
import {ToolbarService} from '../toolbar/toolbar.service';

@Component({
  selector: 'app-post-catalog',
  templateUrl: './post-catalog.component.html',
  styleUrls: ['./post-catalog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PostCatalogComponent implements OnInit {

  allPosts: Array<Post>;
  columnDefinitions = Array<ExtendedTableColumn>();

  tableLoading = true;

  constructor(private postService: PostService,
              private toolbarService: ToolbarService) {
  }

  ngOnInit() {
    this.toolbarService.$title.next('Posts');

    this.postService.getAll().subscribe(res => {
      this.allPosts = res;
      this.tableLoading = false;
    });

    this.columnDefinitions = [
      {
        name: 'Id',
        flexGrow: 0.2,
        resizeable: false
      },
      {
        name: 'User Id',
        flexGrow: 0.3,
        resizeable: false
      },
      {
        name: 'Title',
        flexGrow: 1,
        resizeable: false
      },
      {
        name: 'Body',
        flexGrow: 1.5,
        resizeable: false
      }
    ];
  }

  deletePosts(posts: Array<Post>) {
    if (posts.length > 1) {
      this.allPosts = this.allPosts.filter(i => !posts.map(j => j.id).includes(i.id));
    } else {
      this.allPosts = this.allPosts.filter(person => person.id !== posts[0].id);
    }
  }
}
