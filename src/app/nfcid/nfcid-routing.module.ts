import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NFCIdPage } from './nfcid.page';

const routes: Routes = [
  {
    path: '',
    component: NFCIdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NFCIdPageRoutingModule {}
