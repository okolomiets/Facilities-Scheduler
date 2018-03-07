import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// components
import * as fromFacilities from '../components/facilities/facilities.index';
import * as fromSchedule from '../components/schedule/schedule.index';

// services
import { CoreService } from './core.service';
import { AppModalService } from '../shared/modals/modals.service';

// shared
import { SharedModule } from '../shared/shared.module';

// routes
export const ROUTES: Routes = [
  {
    path: '',
    component: fromFacilities.FacilitiesComponent,
  },
  {
    path: ':facilityId',
    component: fromSchedule.ScheduleComponent,
  },
];

@NgModule({
  declarations: [
    ...fromFacilities.FacilitiesContainer,
    ...fromSchedule.ScheduleContainer
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
    CoreService,
    AppModalService
  ],
  exports: [
    fromFacilities.FacilityScheduleModalComponent
  ]
})
export class CoreModule {}
