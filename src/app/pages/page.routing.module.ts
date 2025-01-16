import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './page.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: '',
        component: PageComponent,
        children: [
            {
                path: 'anonymous',
                loadChildren: () => import('./anonymous/anonymous.module').then(m => m.AnonymousModule)
            },
            {
                path: 'authorized',
                loadChildren: () => import('./authorized/authorized.module').then(m => m.AuthorizedModule)
            }
        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PageRoutingModule { }
