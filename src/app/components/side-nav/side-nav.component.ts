import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

export interface SideNavItem {
  icon: string;
  text: string;
  routerLink: string;
}

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  sideNavExpanded = false;
  sideNavItems: Array<SideNavItem>;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.sideNavItems = new Array<SideNavItem>();
    this.sideNavItems.push({icon: 'home', text: 'Home', routerLink: 'link-one'});
    this.sideNavItems.push({icon: 'search', text: 'Search', routerLink: 'link-two'});
  }

  doSideNavExpansion() {
    this.sideNavExpanded = !this.sideNavExpanded;
  }

  doRouteLink(routerLink: string) {
    this.router.navigateByUrl(routerLink);
  }
}
