import {Component, OnInit} from '@angular/core';
import {ToolbarService} from '../toolbar/toolbar.service';

@Component({
  selector: 'app-link-one',
  templateUrl: './link-one.component.html',
  styleUrls: ['./link-one.component.scss']
})
export class LinkOneComponent implements OnInit {

  constructor(private toolbarService: ToolbarService) {

  }

  ngOnInit() {
    this.toolbarService.$title.next('Link One');
    this.toolbarService.$showBackButton.next(true);
  }

}
