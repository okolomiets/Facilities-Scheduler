import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CalendarService} from '../../calendar.service';

import { Facility } from '../../models/facility';

@Component({
  selector: 'app-facilities',
  template: `<div class="row">
    <ng-container *ngFor="let facility of facilities">
      <app-facility-item *ngIf="!facility.group" [facility]="facility"></app-facility-item>
      <app-facility-group *ngIf="facility.group" [facilityGroup]="facility"></app-facility-group>
    </ng-container>
  </div>`,
  styleUrls: ['./facilities.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FacilitiesComponent implements OnInit {
  facilities: Facility[] = [];

  constructor(private calendarService: CalendarService) { }

  ngOnInit() {
    this.facilities = this.calendarService.getFacilities();
  }
}
