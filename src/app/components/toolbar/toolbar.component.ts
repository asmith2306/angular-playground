import {Component, ComponentFactoryResolver, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {ToolbarService} from './toolbar.service';
import {RhsAnchorDirective} from './rhs-anchor.directive';

class NavLink {
  label: string;
  path: string;
}

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ToolbarComponent implements OnInit {

  @ViewChild(RhsAnchorDirective, {static: true})
  rhsAnchorDirective: RhsAnchorDirective;

  navLinks = new Array<NavLink>();
  toolbarTitle: string;
  showBackButton: boolean;

  constructor(private toolbarService: ToolbarService,
              private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
    // this.navLinks.push(
    //   {label: 'Link 1', path: '/link-one'},
    //   {label: 'Link 2', path: '/link-two'},
    //   {label: 'Post Catalog', path: '/post-catalog'},
    //   {label: 'People Catalog', path: '/people-catalog'}
    // );

    this.loadRhsTool();

    this.toolbarService.$title.subscribe(title => {
      this.toolbarTitle = title;
    });

    this.toolbarService.$showBackButton.subscribe(show => {
      this.showBackButton = show;
    });
  }

  private loadRhsTool() {
    this.toolbarService.$rhsTool.subscribe(tool => {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(tool);

      const viewContainerRef = this.rhsAnchorDirective.viewContainerRef;
      viewContainerRef.clear();

      viewContainerRef.createComponent(componentFactory);
    });

  }
}
