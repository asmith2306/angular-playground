import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {Person} from '../../models/person';
import {PeopleService} from '../../services/people.service';
import {PostService} from '../../services/post.service';
import {Post} from '../../models/post';
import {ExtendedTableColumn} from '../custom-datatable/custom-datatable.component';

@Component({
  selector: 'app-catalog',
  templateUrl: './people-catalog.component.html',
  styleUrls: ['./people-catalog.component.scss']
})
export class PeopleCatalogComponent implements OnInit {

  allPeople: Array<Person>;
  allPosts: Array<Post>;
  columnDefinitions = Array<ExtendedTableColumn>();

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
      this.tableLoading = false;
    });

    this.columnDefinitions = [
      {
        name: 'Id',
        flexGrow: 0.25,
        resizeable: false
      },
      {
        name: 'Name',
        flexGrow: 0.8,
        resizeable: false
      },
      {
        name: 'Gender',
        flexGrow: 0.5,
        resizeable: false
      },
      {
        name: 'Address',
        flexGrow: 0.8,
        resizeable: false,
        splitProps: ['city', 'state']
      },
      {
        name: 'Age',
        flexGrow: 0.2,
        resizeable: false,
        prop: 'age'
      }];

  }

  deletePerson(id: number) {
    this.allPeople = this.allPeople.filter(person => person.id !== id);
  }
}