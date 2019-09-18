import {Component, OnInit, ViewEncapsulation} from '@angular/core';

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

  navLinks = new Array<NavLink>();

  ngOnInit(): void {
    this.navLinks.push(
      {label: 'Link 1', path: '/link-one'},
      {label: 'Link 2', path: '/link-two'},
      {label: 'Post Catalog', path: '/post-catalog'},
      {label: 'People Catalog', path: '/people-catalog'}
    );

  }


}
