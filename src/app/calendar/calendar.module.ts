import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ScheduleComponent } from './components/schedule/schedule';
import { CalendarComponent } from './calendar.component';
import { FacilitiesComponent } from './components/facilities/facilities.component';
import { FacilityGroupComponent } from './components/facilities/facilityGroup/facilityGroup.component';
import { FacilityItemComponent } from './components/facilities/facilityItem/facilityItem.component';

import { CalendarService } from './calendar.service';

@NgModule({
  declarations: [
    // registering our container component
    CalendarComponent,
    ScheduleComponent,
    FacilitiesComponent,
    FacilityGroupComponent,
    FacilityItemComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    // add the service to our sub-module
    CalendarService
  ],
  exports: [
    // exporting so our root module can access
    CalendarComponent
  ]
})
export class CalendarModule {}
