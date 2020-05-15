import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Codigobarrasv2PageRoutingModule } from './codigobarrasv2-routing.module';

import { Codigobarrasv2Page } from './codigobarrasv2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Codigobarrasv2PageRoutingModule
  ],
  declarations: [Codigobarrasv2Page]
})
export class Codigobarrasv2PageModule {}
