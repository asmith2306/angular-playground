import {Component, OnInit} from '@angular/core';
import {ToolbarService} from '../toolbar/toolbar.service';

@Component({
  selector: 'app-link-two',
  templateUrl: './link-two.component.html',
  styleUrls: ['./link-two.component.scss']
})
export class LinkTwoComponent implements OnInit {

  constructor(private toolbarService: ToolbarService) {
  }

  ngOnInit() {
    this.toolbarService.reset();

    this.toolbarService.$title.next('Link Two');
  }

}
