import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ScheduleComponent } from './components/schedule/schedule';
import { CoreComponent } from './core.component';
import { FacilitiesComponent } from './components/facilities/facilities.component';
import { FacilityGroupComponent } from './components/facilities/facilityGroup/facilityGroup.component';
import { FacilityItemComponent } from './components/facilities/facilityItem/facilityItem.component';
import { FacilityScheduleModalComponent } from './components/facilities/facilityScheduleModal/facilityScheduleModal.component';

import { CoreService } from './core.service';
import { AppModalService } from '../shared/modals/modals.service';
import { SharedModule } from '../shared/shared.module';

// primeNG modules
// import { CalendarModule } from 'primeng/calendar';

// routes
export const ROUTES: Routes = [
  {
    path: '',
    component: CoreComponent,
  },
  {
    path: ':facilityId',
    component: CoreComponent,
  },
];

@NgModule({
  declarations: [
    // registering our container component
    CoreComponent,
    ScheduleComponent,
    FacilitiesComponent,
    FacilityGroupComponent,
    FacilityItemComponent,
    FacilityScheduleModalComponent
  ],
  entryComponents: [
    FacilityScheduleModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    // FormsModule,
    SharedModule,
    // CalendarModule
  ],
  providers: [
    // add the service to our sub-module
    CoreService,
    AppModalService
  ],
  exports: [
    FacilityScheduleModalComponent
  ]
})
export class CoreModule {}
