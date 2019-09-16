import {Component, OnInit} from '@angular/core';
import {Person} from '../../models/person';
import {PeopleService} from '../../services/people.service';
import {TableColumn} from '@swimlane/ngx-datatable';
import {PostService} from '../../services/post.service';
import {Post} from '../../models/post';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  allPeople: Array<Person>;
  allPosts: Array<Post>;
  columnDefinitions = Array<TableColumn>();


  tableLoading = true;


  constructor(private peopleService: PeopleService, private postService: PostService) {
  }

  ngOnInit() {

    this.postService.getAll().subscribe(res => {
      this.allPosts = res;
      this.tableLoading = false;
    });

    this.peopleService.get().subscribe(res => {
      this.allPeople = res;
      // console.log(this.allPeople)
      this.tableLoading = false;
    });

    this.columnDefinitions = [
      {
        name: 'ID',
        flexGrow: 0.5,
        resizeable: false
      },
      {
        name: 'NAME',
        flexGrow: 1,
        resizeable: false
      },
      {
        name: 'GENDER',
        flexGrow: 0.5,
        resizeable: false
      },
      {
        name: 'ADDRESS',
        flexGrow: 1,
        resizeable: false,
        prop: 'address.city',
      },
      {
        name: 'AGE',
        flexGrow: 0.2,
        resizeable: false
      }];

    this.columnDefinitions = [
      {
        name: 'USER ID',
        flexGrow: 0.5,
        resizeable: false,
        prop: 'userId'
      },
      {
        name: 'ID',
        flexGrow: 0.5,
        resizeable: false,
        prop: 'id'
      },
      {
        name: 'TITLE',
        flexGrow: 2,
        resizeable: false,
        prop: 'title'
      },
      {
        name: 'BODY',
        flexGrow: 3,
        resizeable: false,
        prop: 'body'
      }
    ];
  }

}
