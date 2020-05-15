import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Codigobarrasv2Page } from './codigobarrasv2.page';

const routes: Routes = [
  {
    path: '',
    component: Codigobarrasv2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Codigobarrasv2PageRoutingModule {}
