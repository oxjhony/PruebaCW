import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CriteriaEvidencesPageRoutingModule } from './criteria-evidences-routing.module';

import { CriteriaEvidencesPage } from './criteria-evidences.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CriteriaEvidencesPageRoutingModule
  ],
  declarations: [CriteriaEvidencesPage]
})
export class CriteriaEvidencesPageModule {}
