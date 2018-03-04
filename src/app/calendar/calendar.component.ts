import {Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';

import { Event } from './models/event';

import { CalendarService } from './calendar.service';
import { Facility } from './models/facility';

@Component({
  selector: 'app-calendar',
  template: `
    <div *ngIf="!showSchedule" class="app-facilities-list">
      <app-facilities></app-facilities>
    </div>
    <div *ngIf="showSchedule" class="app-calendar-container">
      <ol class="breadcrumb">
        <li><a routerLink="/calendar">Facilities</a></li>
        <li>{{facility.name}}</li>
      </ol>
      <app-fullcalendar [options]="calendarOptions"
                        [events]="events"
                        (select)="onSelect($event)">
      </app-fullcalendar>
    </div>
`,
})
export class CalendarComponent implements OnInit, OnDestroy {
  calendarOptions: Object;
  events: Event[] = [];
  calendarEvents = new Subject();
  paramsSub: Subscription;
  showSchedule = false;
  facilityId: number;
  facility: Facility;

  constructor(
    private calendarService: CalendarService,
    private currentRoute: ActivatedRoute,
    private router: Router
  ) { }

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

    this.paramsSub = this.currentRoute.params.subscribe((params: Params) => {
      if (params['facilityId']) {
        this.facilityId = parseInt(params['facilityId'], 10);
        this.showSchedule = !!this.facilityId;
        this.facility = this.calendarService.getFacilities()
          .find(facility => facility.id === this.facilityId);
        this.events = this.calendarService.getEvents()
          .reduce((events, event) => {
            if (event.facilityId === this.facilityId) {
              events.push(event);
            }
            return events;
          }, []);
      }
    });
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

  goHome() {
    this.router.navigate([''], {relativeTo: this.currentRoute});
  }

  ngOnDestroy() {
    this.paramsSub.unsubscribe();
  }

}
