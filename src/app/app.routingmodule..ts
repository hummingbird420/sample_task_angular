import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const MainRoute: Routes = [
  {
    path: '',
    redirectTo: '/anonymous',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'anonymous',
    loadChildren: () => import('./pages/anonymous/anonymous.module').then(m => m.AnonymousModule)
  },
  {
    path: 'authorized',
    loadChildren: () => import('./pages/authorized/authorized.module').then(m => m.AuthorizedModule)
  },
  {
    path: '**',
    redirectTo: '/anonymous',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(MainRoute)],
  exports: [RouterModule]
})
export class AppRoutingModule { }