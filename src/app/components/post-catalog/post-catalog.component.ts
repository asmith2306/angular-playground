import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {PostService} from '../../services/post.service';
import {Post} from '../../models/post';
import {MatSnackBarService} from '../../services/mat-snackbar.service';
import {ExtendedTableColumn} from '../custom-datatable/custom-datatable.component';

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

  constructor(private postService: PostService) {
  }

  ngOnInit() {

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

}
