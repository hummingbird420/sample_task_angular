import { CommonModule, DatePipe } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AuthRoutingModule } from "./auth/auth.routing.module";
import { ComponentsModule } from "../components/components.module";
import { PageComponent } from "./page.component";
import { PageRoutingModule } from "./page.routing.module";

@NgModule({
    declarations: [
        PageComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        PageRoutingModule,
        ComponentsModule,

    ],
    providers: [DatePipe],
})
export class PageModule { }