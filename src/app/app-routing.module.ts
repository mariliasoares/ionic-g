import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'nfcgedi',
    loadChildren: () => import('./nfcgedi/nfcgedi.module').then( m => m.NFCGediPageModule)
  },
  {
    path: 'nfcid',
    loadChildren: () => import('./nfcid/nfcid.module').then( m => m.NFCIdPageModule)
  },
  {
    path: 'codigobarras1',
    loadChildren: () => import('./codigobarras1/codigobarras1.module').then( m => m.Codigobarras1PageModule)
  },
  {
    path: 'imprimir',
    loadChildren: () => import('./imprimir/imprimir.module').then( m => m.ImprimirPageModule)
  },
  {
    path: 'codigobarrasv2',
    loadChildren: () => import('./codigobarrasv2/codigobarrasv2.module').then( m => m.Codigobarrasv2PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
