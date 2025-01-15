import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './page.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: '',
        component: PageComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('../pages/anonymous/anonymous.module').then(m => m.AnonymousModule)
            },
            {
                path: 'dashboard',
                loadChildren: () => import('../pages/authorized/authorized.module').then(m => m.AuthorizedModule)

            }

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
})
export class PageRoutingModule { }