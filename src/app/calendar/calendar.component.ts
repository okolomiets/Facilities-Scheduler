import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { CalendarService } from './calendar.service';

@Component({
  selector: 'app-calendar',
  template: `
    <div class="app-facilities-list">
      <app-facilities></app-facilities>
    </div>
    <hr>
    <div *ngIf="showSchedule" class="app-calendar-container">
      <app-fullcalendar [options]="calendarOptions"
                        [events]="events"
                        (select)="onSelect($event)">
      </app-fullcalendar>
    </div>
`,
})
export class CalendarComponent implements OnInit {
  calendarOptions: Object;
  events: Object[] = [];
  calendarEvents = new Subject();
  showSchedule = true;

  constructor(private calendarService: CalendarService) { }

  ngOnInit() {
    this.calendarOptions = {
      height: 'auto',
      fixedWeekCount : false,
      selectable: false,
      editable: false,
      defaultView: 'agendaWeek',
      slotDuration: '01:00:00',
      minTime: '08:00:00',
      maxTime: '21:00:00',
      slotEventOverlap: false,
      eventLimit: false, // allow "more" link when too many events
      header: {
        left: 'agendaWeek,month,listWeek',
        center: 'title',
        right: 'addEventButton today prev,next'
      },
    };

    this.calendarEvents.subscribe((data: Object[]) => {
      this.events = data;
    });

    this.events = this.calendarService.getEvents();
  }

  onSelect({date, jsEvent, view}) {
    console.log('onSelect view', view.type);
    console.log('onSelect date', date.format());
    // this.store.dispatch(new fromStore.VisualiseToppings(event));
  }

  onClick() {
    this.showSchedule = !this.showSchedule;
  }

  onSubmit() {
    this.calendarEvents.next([]);
  }

}
