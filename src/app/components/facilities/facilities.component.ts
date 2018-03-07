import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
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
        <app-facility-item *ngIf="!facility.group" [facility]="facility" [recentFacilityId]="recentFacilityId"></app-facility-item>
        <app-facility-group *ngIf="facility.group" [facilityGroup]="facility" [recentFacilityId]="recentFacilityId"></app-facility-group>
      </ng-container>
    </div>
  </div>
    `,
  styleUrls: ['./facilities.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FacilitiesComponent implements OnInit, OnDestroy {
  recentFacilityId: number = null;
  facilities$: Observable<Facility[]>;
  paramsSub: Subscription;

  constructor(
    private coreService: CoreService,
    private currentRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.facilities$ = this.coreService.getFacilities();
    this.paramsSub = this.currentRoute.params.subscribe((params: Params) => {
      if (params['recentFacilityId']) {
        this.recentFacilityId = parseInt(params['recentFacilityId'], 10);
      }
    });
  }

  ngOnDestroy() {
    this.paramsSub.unsubscribe();
  }
}
