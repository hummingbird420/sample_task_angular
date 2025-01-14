import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../../components/components.module';
import { UserListPage } from './user-list/user-list.page';
import { AnonymousRoutingModule } from './anonymous.routing.module';

@NgModule({
    declarations: [
        UserListPage
    ],
    imports: [

        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        AnonymousRoutingModule,
        ComponentsModule,

    ],
    providers: [DatePipe],
})
export class AnonymousModule { }
