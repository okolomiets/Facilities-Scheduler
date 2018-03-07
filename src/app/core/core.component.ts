import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { Event } from './models/event';

import { CoreService } from './core.service';
import { AppModalService } from '../shared/modals/modals.service';

import { Facility } from './models/facility';

import { FacilityScheduleModalComponent } from './components/facilities/facilityScheduleModal/facilityScheduleModal.component';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-calendar',
  template: `
    <div *ngIf="!showSchedule" class="app-facilities-list">
      <app-facilities></app-facilities>
    </div>
    <div *ngIf="showSchedule && facility" class="app-calendar-container">
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

export class CoreComponent implements OnInit, OnDestroy {
  calendarOptions: Object;
  events: Event[] = [];
  paramsSub: Subscription;
  facilityEntitiesSub: Subscription;
  facilityEventsSub: Subscription;
  showSchedule = false;
  facilityId: number;
  facility: Facility;

  constructor(
    private coreService: CoreService,
    private currentRoute: ActivatedRoute,
    private router: Router,
    private appModalService: AppModalService
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

        this.facilityEntitiesSub = this.coreService.getFacilityEntities().subscribe(facilityEntities => {
          this.facility = facilityEntities[this.facilityId];
          if (!this.facility) {
            this.goBack();
          } else {
            this.facilityEventsSub = this.coreService.getFacilityEvents(this.facilityId).subscribe(facilityEvents => {
              this.events = facilityEvents;
            });
          }
        });
      }
    });
  }

  onSelect({date, jsEvent, view}) {
    this.appModalService.open(FacilityScheduleModalComponent, { start: date, facility: this.facility })
      .then((result) => {
        const newEvent = {
          facilityId: this.facilityId,
          ...result
        };
        this.events = [...this.events, newEvent];
        this.coreService.updateEvents(newEvent);
      })
      .catch((result) => {
        if (result) {
          console.log('appModalService modal dismiss or error', result);
        }
      });
  }

  goBack() {
    this.router.navigate([''], {relativeTo: this.currentRoute});
  }

  ngOnDestroy() {
    this.paramsSub.unsubscribe();
    this.facilityEntitiesSub.unsubscribe();
    this.facilityEventsSub.unsubscribe();
  }

}
