import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AngularFireAuthGuard,redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const redirectToLogin = () => redirectUnauthorizedTo(['login']);
const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
 
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  
  
  {
    path: 'logoff',
    loadChildren: () => import('./logoff/logoff.module').then( m => m.LogoffPageModule),
    canActivate : [AngularFireAuthGuard],
    data : {àuthGuardPipe : redirectToLogin}
  },
  
  {
    path: 'maps',
    loadChildren: () => import('./maps/maps.module').then( m => m.MapsPageModule)
  },
  {
    path: 'maps-geolocation',
    loadChildren: () => import('./maps-geolocation/maps-geolocation.module').then( m => m.MapsGeolocationPageModule)
  },
  {
    path: 'itensvencidos',
    loadChildren: () => import('./itensvencidos/itensvencidos.module').then( m => m.ItensvencidosPageModule),
    canActivate : [AngularFireAuthGuard],
    data : {àuthGuardPipe : redirectToLogin}
  },
  {
    path: 'itens-vencidos-detalhe/:id',
    loadChildren: () => import('./itens-vencidos-detalhe/itens-vencidos-detalhe.module').then( m => m.ItensVencidosDetalhePageModule),
    canActivate : [AngularFireAuthGuard],
    data : {àuthGuardPipe : redirectToLogin}
  },
  {
    path: 'itens-vencidos-update/:id',
    loadChildren: () => import('./itens-vencidos-update/itens-vencidos-update.module').then( m => m.ItensVencidosUpdatePageModule)
  ,canActivate : [AngularFireAuthGuard],
  data : {àuthGuardPipe : redirectToLogin}
  },
  {
    path: 'itens-vencidos-foto/:id',
    loadChildren: () => import('./itens-vencidos-foto/itens-vencidos-foto.module').then( m => m.ItensVencidosFotoPageModule)
    ,canActivate : [AngularFireAuthGuard],
    data : {àuthGuardPipe : redirectToLogin}
  },
  {
    path: 'itens-vencidos-novo',
    loadChildren: () => import('./itens-vencidos-novo/itens-vencidos-novo.module').then( m => m.ItensVencidosNovoPageModule)
    ,canActivate : [AngularFireAuthGuard],
    data : {àuthGuardPipe : redirectToLogin}
  },
  {
    path: 'itens-vencidos-delete/:id',
    loadChildren: () => import('./itens-vencidos-delete/itens-vencidos-delete.module').then( m => m.ItensVencidosDeletePageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
