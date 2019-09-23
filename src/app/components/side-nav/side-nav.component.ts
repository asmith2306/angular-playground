import {Component, Input, OnInit} from '@angular/core';
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

  @Input()
  sideNavItems: Array<SideNavItem>;

  sideNavExpanded = false;

  constructor(private router: Router) {
  }

  ngOnInit() {

  }

  doSideNavExpansion() {
    this.sideNavExpanded = !this.sideNavExpanded;
  }

  doRouteLink(routerLink: string) {
    this.router.navigateByUrl(routerLink);
  }

  isActive(sideNavItem: SideNavItem) {
    return this.router.isActive(sideNavItem.routerLink, false);
  }
}
