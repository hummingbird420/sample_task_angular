import { NgModule } from "@angular/core";
import { SideMenuComponent } from "./side-menu/side-menu.component";
import { MenuDirective } from "../directives/menu.directive";
import { FormFieldComponent } from "./form-field/form-field.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppTableComponent } from "./app-table/app-table.component";
import { NgxPaginationModule } from "ngx-pagination";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";


@NgModule({
    declarations: [
        HeaderComponent,
        SideMenuComponent,
        MenuDirective,
        FormFieldComponent,
        AppTableComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgxPaginationModule,
    ],
    exports: [
        HeaderComponent,
        SideMenuComponent,
        MenuDirective,
        FormFieldComponent,
        AppTableComponent
    ]
})
export class ComponentsModule { }
