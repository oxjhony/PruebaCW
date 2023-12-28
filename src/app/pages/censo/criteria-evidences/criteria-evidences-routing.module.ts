import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CriteriaEvidencesPage } from './criteria-evidences.page';

const routes: Routes = [
  {
    path: '',
    component: CriteriaEvidencesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CriteriaEvidencesPageRoutingModule {}
