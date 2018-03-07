import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Event } from '../../models/event';
import { Facility } from '../../models/facility';
import { FacilityScheduleModalComponent } from '../facilities/facilityScheduleModal/facilityScheduleModal.component';

import { CoreService } from '../../core.service';
import { AppModalService } from '../../../shared/modals/modals.service';

@Component({
  template: `<div class="app-schedule-container" *ngIf="facility">
                <ol class="breadcrumb">
                  <li><a routerLink="/calendar">Facilities</a></li>
                  <li>{{facility.name}}</li>
                </ol>
                <app-fullcalendar [options]="calendarOptions"
                                  [events]="events"
                                  (select)="onSelect($event)">
                </app-fullcalendar>
            </div>`,
  selector: 'app-schedule'
})
export class ScheduleComponent implements OnInit, OnDestroy {
  calendarOptions: Object;
  events: Event[] = [];
  paramsSub: Subscription;
  facilityEntitiesSub: Subscription;
  facilityEventsSub: Subscription;
  facilityId: number;
  facility: Facility;

  constructor(
    private currentRoute: ActivatedRoute,
    private coreService: CoreService,
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
    this.router.navigate(['/'], {relativeTo: this.currentRoute});
  }

  ngOnDestroy() {
    this.paramsSub.unsubscribe();
    if (this.facilityEntitiesSub) { this.facilityEntitiesSub.unsubscribe(); }
    if (this.facilityEventsSub) { this.facilityEventsSub.unsubscribe(); }
  }
}
