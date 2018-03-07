import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { ScheduleComponent } from '../components/schedule/schedule';
import { CalendarComponent } from '../components/schedule/calendar/calendar';
import { FacilitiesComponent } from '../components/facilities/facilities.component';

import * as fromFacilities from '../components/facilities/facilities.index';

import { CoreService } from './core.service';
import { AppModalService } from '../shared/modals/modals.service';
import { SharedModule } from '../shared/shared.module';

// routes
export const ROUTES: Routes = [
  {
    path: '',
    component: FacilitiesComponent,
  },
  {
    path: ':facilityId',
    component: ScheduleComponent,
  },
];

@NgModule({
  declarations: [
    // registering our container component
    ScheduleComponent,
    CalendarComponent,
    ...fromFacilities.container
  ],
  entryComponents: [
    fromFacilities.FacilityScheduleModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    ReactiveFormsModule,
    SharedModule,
  ],
  providers: [
    // add the service to our sub-module
    CoreService,
    AppModalService
  ],
  exports: [
    fromFacilities.FacilityScheduleModalComponent
  ]
})
export class CoreModule {}
