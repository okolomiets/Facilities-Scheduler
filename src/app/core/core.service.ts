import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
// import { tap, filter, take, switchMap, catchError } from 'rxjs/operators';

import { Event } from './models/event';
import { Facility, FacilityEntities } from './models/facility';

import { Facilities, Events } from './core.data';

@Injectable()
export class CoreService {
  private facilities: Facility[];
  private events: Event[];
  facilityEntities: FacilityEntities;

  constructor() {
    this.facilities = Facilities;
    this.events = Events;
    this.facilityEntities = this.setFacilityEntities();
  }

  getFacilities(): Observable<Facility[]> {
    return of(this.facilities);
  }

  getFacilityEntities(): Observable<FacilityEntities> {
    return of(this.facilityEntities);
  }

  getEvents(): Event[] {
    return this.events;
  }

  updateEvents(newEvent): void {
    this.events = [...this.events, newEvent];
  }

  setFacilityEntities(): FacilityEntities {
    return this.facilities
      .reduce((entities, facility) => {
        entities[facility.id] = facility;
        if (facility.group) {
          facility.group.forEach(gFacility => {
            entities[gFacility.id] = gFacility;
          });
        }
        return entities;
      }, {});
  }

  getFacilityEvents(facilityId): Observable<Event[]> {
    const facilityEvents = this.getEvents().reduce((events, event) => {
      if (event.facilityId === facilityId) {
        events.push(event);
      }
      return events;
    }, []);
    return of(facilityEvents);
  }
}
