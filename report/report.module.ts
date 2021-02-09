import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CleaningDetails1PageRoutingModule } from './cleaning-details1-routing.module';

import { CleaningDetails1Page } from './cleaning-details1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CleaningDetails1PageRoutingModule
  ],
  declarations: [CleaningDetails1Page]
})
export class CleaningDetails1PageModule {}
