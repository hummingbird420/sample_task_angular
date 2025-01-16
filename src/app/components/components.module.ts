import { NgModule } from "@angular/core";
import { SideMenuComponent } from "./side-menu/side-menu.component";
import { MenuDirective } from "../directives/menu.directive";
import { FormFieldComponent } from "./form-field/form-field.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppTableComponent } from "./app-table/app-table.component";
import { NgxPaginationModule } from "ngx-pagination";
import { CommonModule, NgTemplateOutlet } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastsContainer } from "./toast-container/toast-container.component";

@NgModule({
    declarations: [
        HeaderComponent,
        SideMenuComponent,
        MenuDirective,
        FormFieldComponent,
        AppTableComponent,
        ToastsContainer
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgxPaginationModule,
        NgbToastModule,
        NgTemplateOutlet
    ],
    exports: [
        HeaderComponent,
        SideMenuComponent,
        MenuDirective,
        FormFieldComponent,
        AppTableComponent,
        ToastsContainer
    ]
})
export class ComponentsModule { }
