import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appRhsAnchor]'
})
export class RhsAnchorDirective {

  constructor(public viewContainerRef: ViewContainerRef) {
  }

}
