import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Facility } from '../../../models/facility';

@Component({
  selector: 'app-facility-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="col-md-12">
      <div class="panel panel-default">
        <div class="panel-heading">{{facilityGroup.name}}<span class="label label-default">{{facilityGroup.price | currency}}/h</span></div>
        <div class="panel-body">
          <div>
            <p>{{facilityGroup.description}}</p>
          </div>
          <div class="row">
            <app-facility-item *ngFor="let facility of facilityGroup.group" [facility]="facility" [recentFacilityId]="recentFacilityId"></app-facility-item>
          </div>
        </div>
        <div class="panel-footer">
          <span class="btn btn-default" [routerLink]="['/facilities', facilityGroup.id]">Show Schedule</span>
          <span class="label label-info" *ngIf="facilityGroup.id === recentFacilityId">Recently Viewed</span>
        </div>
      </div>
    </div>
    `
})
export class FacilityGroupComponent {
  @Input() facilityGroup: Facility;
  @Input() recentFacilityId: number;
}
