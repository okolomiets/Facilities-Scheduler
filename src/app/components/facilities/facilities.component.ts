import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { CoreService } from '../../core/core.service';

import { Facility } from '../../models/facility';

@Component({
  selector: 'app-facilities',
  template: `<div class="app-facilities-list">
    <div class="row">
      <ng-container *ngFor="let facility of (facilities$ | async)">
        <app-facility-item *ngIf="!facility.group" [facility]="facility" [recent]="recentFacility"></app-facility-item>
        <app-facility-group *ngIf="facility.group" [facilityGroup]="facility" [recent]="recentFacility"></app-facility-group>
      </ng-container>
    </div>
  </div>
    `,
  styleUrls: ['./facilities.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FacilitiesComponent implements OnInit {
  recentFacility: Facility;
  facilities$: Observable<Facility[]>;
  paramsSub: Subscription;
  facilityEntitiesSub: Subscription;

  constructor(
    private coreService: CoreService,
    private currentRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.facilities$ = this.coreService.getFacilities();
    this.paramsSub = this.currentRoute.params.subscribe((params: Params) => {
      if (params['recentFacilityId']) {
        const facilityId = parseInt(params['recentFacilityId'], 10);
        this.facilityEntitiesSub = this.coreService.getFacilityEntities().subscribe(facilityEntities => {
          this.recentFacility = facilityEntities[facilityId];
        });
      }
    });
  }
}
