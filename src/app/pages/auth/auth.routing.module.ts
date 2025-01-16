import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SignUpPage } from "./sign-up/sign-up.page";
import { SignInPage } from "./sign-in/sign-in.page";


const routes: Routes = [
    {
        path: 'sign-up',
        component: SignUpPage
    },
    {
        path: 'sign-in',
        component: SignInPage
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
