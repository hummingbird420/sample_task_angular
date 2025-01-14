import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserListPage } from "./user-list/user-list.page";

const routes: Routes = [
    {
        path: '',
        redirectTo: 'users',
        pathMatch: 'full'
    },
    {
        path: 'users',
        component: UserListPage
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
})
export class AnonymousRoutingModule { }