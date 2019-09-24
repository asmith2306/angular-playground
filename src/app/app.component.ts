import {Component, OnInit} from '@angular/core';
import {ToolbarService} from './components/toolbar/toolbar.service';
import {ToolbarMenuComponent} from './components/toolbar-menu/toolbar-menu.component';
import {SideNavItem} from './components/side-nav/side-nav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  sideNavItems: Array<SideNavItem>;

  constructor(private toolbarService: ToolbarService) {

  }

  ngOnInit(): void {
    this.toolbarService.$rhsTool.next(ToolbarMenuComponent);

    this.sideNavItems = new Array<SideNavItem>();
    this.sideNavItems.push({icon: 'local_post_office', text: 'Posts', routerLink: 'post-catalog'});
    this.sideNavItems.push({icon: 'emoji_people', text: 'People', routerLink: 'people-catalog'});
    this.sideNavItems.push({icon: 'swap_horizontal_circle', text: 'Input/Output', routerLink: 'input-output-table'});
  }

}
