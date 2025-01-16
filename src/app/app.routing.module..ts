import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const MainRoute: Routes = [
  {
    path: '',
    redirectTo: 'anonymous/users',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/page.module').then(m => m.PageModule)
  },
  {
    path: '**',
    redirectTo: 'anonymous/users',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(MainRoute)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
