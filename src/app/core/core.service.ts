import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { tap, filter, take, switchMap, catchError } from 'rxjs/operators';

import { Event } from '../models/event';
import { Facility, FacilityEntities } from '../models/facility';

@Injectable()
export class CoreService {
  facilityEntities: FacilityEntities;

  constructor(
    private http: HttpClient
  ) { }

  getFacilities(): Observable<Facility[]> {
      return this.http
        .get<Facility[]>(`/api/facilities`)
        .pipe(
          tap( (facilities: Facility[]) => {
            this.facilityEntities = this.setFacilityEntities(facilities);
          }),
          catchError((error: any) => Observable.throw(error.json()))
        );
  }

  getFacilityEntities(): Observable<FacilityEntities> {
    if (this.facilityEntities) {
      return of(this.facilityEntities);
    } else {
      return this.getFacilities().pipe(
        switchMap((facilities: Facility[]) => {
          this.facilityEntities = this.setFacilityEntities(facilities);
          return of(this.facilityEntities);
        })
      );
    }
  }

  getEvents(): Observable<Event[]> {
    return this.http
      .get<Event[]>(`/api/events`)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  updateEvents(newEvent: Event): Observable<Event[]> {
    return this.http
      .post<Event>(`/api/events`, newEvent)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  setFacilityEntities(facilities): FacilityEntities {
    return facilities
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
    return this.getEvents().pipe(
      switchMap(events => {
        const facilityEvents = events.reduce((fEvents, event) => {
          if (event.facilityId === facilityId) {
            fEvents.push(event);
          }
          return fEvents;
        }, []);
        return of(facilityEvents);
      })
    );
  }
}
