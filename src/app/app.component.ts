import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';

class NavLink {
  label: string;
  path: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  title = 'demo';
  navLinks = new Array<NavLink>();

  sideNavExpanded = false;

  ngOnInit(): void {
    this.navLinks.push(
      {label: 'Link 1', path: '/link-one'},
      {label: 'Link 2', path: '/link-two'},
      {label: 'Post Catalog', path: '/post-catalog'},
      {label: 'People Catalog', path: '/people-catalog'}
    );

  }

  doSideNavExpansion() {
    this.sideNavExpanded = !this.sideNavExpanded;
  }
}
