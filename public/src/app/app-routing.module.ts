import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewAuthorComponent } from './common/components/view-author/view-author.component';
import { CreateAuthorComponent } from './common/components/create-author/create-author.component';
import { ShowAllAuthorComponent } from './common/components/show-all-author/show-all-author.component';
import { EditAuthorComponent } from './common/components/edit-author/edit-author.component';
import { CreateQuoteComponent } from './common/components/create-quote/create-quote.component';

const routes: Routes = [
  { path: 'show-all-author', component: ShowAllAuthorComponent },
  { path: 'view-author/:id', component: ViewAuthorComponent },
  { path: 'edit-author/:id', component: EditAuthorComponent },
  { path: 'create-author', component: CreateAuthorComponent },
  { path: 'create-quote/:id', component: CreateQuoteComponent },
  { path: '', pathMatch: 'full', redirectTo: 'show-all-author' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
