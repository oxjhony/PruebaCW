import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BloquesPageRoutingModule } from './bloques-routing.module';

import { BloquesPage } from './bloques.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BloquesPageRoutingModule
  ],
  declarations: [BloquesPage]
})
export class BloquesPageModule {}
