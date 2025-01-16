import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PatientsPage } from "./patients/patients.page";
import { PatientCreatePage } from "./patient-create/patient-create.page";
import { HospitalsPage } from "./hospitals/hospitals.page";
import { HospitalCreatePage } from "./hospital-create/hospital-create.page";
import { BedsPage } from "./beds/beds.page";
import { BedCreatePage } from "./bed-create/bed-create.page";
import { BedAllotmentPage } from "./bed-allotment/bed-allotment.page";
import { BedAllotmentViewPage } from "./bed-allotment-view/bed-allotment-view.page";
import { DoctorPage } from "./doctor/doctor.page";
import { DoctorCreatePage } from "./doctor-create/doctor-create.page";

const routes: Routes = [
    {
        path: 'patients',
        component: PatientsPage
    },
    {
        path: 'patient-create',
        component: PatientCreatePage
    },
    {
        path: 'doctors',
        component: DoctorPage
    },
    {
        path: 'doctor-create',
        component: DoctorCreatePage
    },
    {
        path: 'hospitals',
        component: HospitalsPage
    },
    {
        path: 'hospital-create',
        component: HospitalCreatePage
    },
    {
        path: 'beds',
        component: BedsPage
    },
    {
        path: 'bed-create',
        component: BedCreatePage
    },
    {
        path: 'bed-allotments',
        component: BedAllotmentPage
    },
    {
        path: 'bed-allotments-view',
        component: BedAllotmentViewPage
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthorizedRoutingModule { }
