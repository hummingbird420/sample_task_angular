import { CommonModule, DatePipe } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AuthRoutingModule } from "./auth/auth.routing.module";
import { ComponentsModule } from "../components/components.module";
import { PageComponent } from "./page.component";

@NgModule({
    declarations: [
        PageComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        AuthRoutingModule,
        ComponentsModule,

    ],
    providers: [DatePipe],
})
export class PageModule { }