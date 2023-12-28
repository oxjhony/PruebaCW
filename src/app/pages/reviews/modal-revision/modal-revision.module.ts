import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalRevisionPageRoutingModule } from './modal-revision-routing.module';

import { ModalRevisionPage } from './modal-revision.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalRevisionPageRoutingModule
  ],
  declarations: [ModalRevisionPage]
})
export class ModalRevisionPageModule {}
