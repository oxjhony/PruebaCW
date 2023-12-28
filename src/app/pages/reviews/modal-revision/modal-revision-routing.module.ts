import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalRevisionPage } from './modal-revision.page';

const routes: Routes = [
  {
    path: '',
    component: ModalRevisionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalRevisionPageRoutingModule {}
