import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LinkOneComponent} from './components/link-one/link-one.component';
import {LinkTwoComponent} from './components/link-two/link-two.component';
import {RxjsTesterComponent} from './components/rxjs-tester/rxjs-tester.component';
import {PostCatalogComponent} from './components/post-catalog/post-catalog.component';
import {CustomDatatableComponent} from './components/custom-datatable/custom-datatable.component';
import {PeopleCatalogComponent} from './components/people-catalog/people-catalog.component';

const routes: Routes = [
  {path: 'link-one', component: LinkOneComponent},
  {path: 'link-two', component: LinkTwoComponent},
  {path: 'post-catalog', component: PostCatalogComponent},
  {path: 'people-catalog', component: PeopleCatalogComponent},
  {path: 'rxjs-tester', component: RxjsTesterComponent},
  {path: '**', component: PostCatalogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
