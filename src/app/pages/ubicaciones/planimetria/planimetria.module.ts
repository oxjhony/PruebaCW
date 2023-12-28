import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlanimetriaPageRoutingModule } from './planimetria-routing.module';

import { PlanimetriaPage } from './planimetria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlanimetriaPageRoutingModule
  ],
  declarations: [PlanimetriaPage]
})
export class PlanimetriaPageModule {}
