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
import {TableComponent} from './components/table/table.component';
import {HttpClientModule} from '@angular/common/http';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import { AssignmentDialogComponent } from './dialogs/assignment-dialog/assignment-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LinkOneComponent,
    LinkTwoComponent,
    RxjsTesterComponent,
    TableComponent,
    AssignmentDialogComponent
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
  entryComponents: [AssignmentDialogComponent]
})
export class AppModule {
}
