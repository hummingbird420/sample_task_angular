import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../../components/components.module';
import { HospitalsPage } from './hospitals/hospitals.page';
import { HospitalCreatePage } from './hospital-create/hospital-create.page';
import { PatientsPage } from './patients/patients.page';
import { PatientCreatePage } from './patient-create/patient-create.page';
import { BedsPage } from './beds/beds.page';
import { BedCreatePage } from './bed-create/bed-create.page';
import { BedAllotmentPage } from './bed-allotment/bed-allotment.page';
import { BedAllotmentViewPage } from './bed-allotment-view/bed-allotment-view.page';
import { NotificationPage } from './notification/notification.page';
import { NotificationViewPage } from './notification-view/notification-view.page';
import { AuthorizedRoutingModule } from './authorized.routing.module';

@NgModule({
    declarations: [
        HospitalsPage,
        HospitalCreatePage,
        PatientsPage,
        PatientCreatePage,
        BedsPage,
        BedCreatePage,
        BedAllotmentPage,
        BedAllotmentViewPage,
        NotificationPage,
        NotificationViewPage
    ],
    imports: [

        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        AuthorizedRoutingModule,
        ComponentsModule,
    ],
    providers: [DatePipe],
})
export class AuthorizedModule { }
