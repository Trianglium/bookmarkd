import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'lists',
    component: ListsComponent
  },
  {
    path: 'lists/new',
    component: ListAddComponent
  },
  {
    path: 'lists/:slug/edit',
    component: ListEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
