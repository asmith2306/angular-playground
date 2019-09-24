import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CustomMaterialModule} from './custom-material.module';
import {LinkOneComponent} from './components/link-one/link-one.component';
import {LinkTwoComponent} from './components/link-two/link-two.component';
import {RxjsTesterComponent} from './components/rxjs-tester/rxjs-tester.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {PostCatalogComponent} from './components/post-catalog/post-catalog.component';
import {HttpClientModule} from '@angular/common/http';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {AssignmentDialogComponent} from './dialogs/assignment-dialog/assignment-dialog.component';
import {UnlessDirective} from './directives/unless.directive';
import {CustomDatatableComponent} from './components/custom-datatable/custom-datatable.component';
import {PeopleCatalogComponent} from './components/people-catalog/people-catalog.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ToolbarMenuComponent } from './components/toolbar-menu/toolbar-menu.component';
import { RhsAnchorDirective } from './components/toolbar/rhs-anchor.directive';
import { InputOutputTableComponent } from './components/input-output-table/input-output-table.component';

@NgModule({
  declarations: [
    AppComponent,
    LinkOneComponent,
    LinkTwoComponent,
    RxjsTesterComponent,
    PostCatalogComponent,
    AssignmentDialogComponent,
    UnlessDirective,
    CustomDatatableComponent,
    PeopleCatalogComponent,
    SideNavComponent,
    ToolbarComponent,
    ToolbarMenuComponent,
    RhsAnchorDirective,
    InputOutputTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    CustomMaterialModule,
    FlexLayoutModule,
    NgxDatatableModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AssignmentDialogComponent, ToolbarMenuComponent]
})
export class AppModule {
}
