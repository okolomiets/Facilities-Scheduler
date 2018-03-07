import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Facility } from '../../../models/facility';

@Component({
  selector: 'app-facility-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="col-md-6 facility-item">
      <div class="panel panel-default">
        <div class="panel-heading">{{facility.name}}<span class="label label-default">{{facility.price | currency}}/h</span></div>
        <div class="panel-body">
          <div class="media">
            <div class="media-left">
              <a>
                <img class="media-object" [src]="facility.photoUrl">
              </a>
            </div>
            <div class="media-body">
              <!-- h4 class="media-heading">Facility Description</h4 -->
              {{facility.description}}
            </div>
          </div>
        </div>
        <div class="panel-footer">
          <span class="btn btn-default" [routerLink]="['/facilities', facility.id]">Show Schedule</span>
          <span class="label label-info" *ngIf="facility.id === recent.id">Recently Viewed</span>
        </div>
      </div>
    </div>
    `
})
export class FacilityItemComponent {
  @Input() facility: Facility;
  @Input() recent: Facility;
}
