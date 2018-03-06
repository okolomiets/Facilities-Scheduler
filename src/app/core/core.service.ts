import { Injectable } from '@angular/core';

import { Event } from './models/event';
import { Facility } from './models/facility';

import { Facilities, Events } from './core.data';

@Injectable()
export class CoreService {
  private facilities: Facility[];
  private events: Event[];
  facilityEntities: {[key: string]: Facility};

  constructor() {
    this.facilities = Facilities;
    this.events = Events;
    this.facilityEntities = this.getFacilityEntities();
  }

  getFacilities(): Facility[] {
    return this.facilities;
  }

  getEvents(): Event[] {
    return this.events;
  }

  updateEvents(newEvent): void {
    this.events = [...this.events, newEvent];
  }

  getFacilityEntities() {
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

  getFacilityEvents(facilityId) {
    return this.getEvents()
      .reduce((events, event) => {
        if (event.facilityId === facilityId) {
          events.push(event);
        }
        return events;
      }, []);
  }
}
