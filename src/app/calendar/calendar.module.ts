import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ScheduleComponent } from './components/schedule/schedule';
import { CalendarComponent } from './calendar.component';

import { CalendarService } from './calendar.service';

@NgModule({
  declarations: [
    // registering our container component
    CalendarComponent,
    ScheduleComponent
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
