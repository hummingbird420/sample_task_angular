import { NgModule } from "@angular/core";
import { SideMenuComponent } from "./side-menu/side-menu.component";
import { MenuDirective } from "../directives/menu.directive";
import { FormFieldComponent } from "./form-field/form-field.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppTableComponent } from "./app-table/app-table.component";
import { NgxPaginationModule } from "ngx-pagination/lib/ngx-pagination.module";

@NgModule({
    declarations: [
        SideMenuComponent,
        MenuDirective,
        FormFieldComponent,
        AppTableComponent
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        NgxPaginationModule,
    ],
    exports: [
        SideMenuComponent,
        MenuDirective,
        FormFieldComponent,
        AppTableComponent
    ]
})
export class ComponentsModule { }
