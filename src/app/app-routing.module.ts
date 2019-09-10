import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LinkOneComponent} from './components/link-one/link-one.component';
import {LinkTwoComponent} from './components/link-two/link-two.component';
import {RxjsTesterComponent} from './components/rxjs-tester/rxjs-tester.component';
import {TableComponent} from './components/table/table.component';


const routes: Routes = [
  {path: 'link-one', component: LinkOneComponent},
  {path: 'link-two', component: LinkTwoComponent},
  {path: 'table', component: TableComponent},
  {path: 'rxjs-tester', component: RxjsTesterComponent},
  {path: '**', component: LinkOneComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
