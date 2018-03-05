import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScheduleComponent } from './components/schedule/schedule';
import { CalendarComponent } from './calendar.component';
import { FacilitiesComponent } from './components/facilities/facilities.component';
import { FacilityGroupComponent } from './components/facilities/facilityGroup/facilityGroup.component';
import { FacilityItemComponent } from './components/facilities/facilityItem/facilityItem.component';
import { FacilityScheduleModalComponent } from './components/facilities/facilityScheduleModal/facilityScheduleModal.component';

import { CalendarService } from './calendar.service';
import { AppModalService } from '../shared/modals/modals.service';
import { SharedModule } from '../shared/shared.module';

// routes
export const ROUTES: Routes = [
  {
    path: '',
    component: CalendarComponent,
  },
  {
    path: ':facilityId',
    component: CalendarComponent,
  },
];

@NgModule({
  declarations: [
    // registering our container component
    CalendarComponent,
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
    SharedModule
  ],
  providers: [
    // add the service to our sub-module
    CalendarService,
    AppModalService
  ],
  exports: [
    FacilityScheduleModalComponent
  ]
})
export class CalendarModule {}
