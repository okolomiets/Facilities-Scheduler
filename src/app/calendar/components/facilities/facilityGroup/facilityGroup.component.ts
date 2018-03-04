import {ChangeDetectionStrategy, Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-facility-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="col-md-12">
      <div class="panel panel-default">
        <div class="panel-heading">{{facilityGroup.name}}<span class="label label-default">{{facilityGroup.price | currency}}</span></div>
        <div class="panel-body">
          <div class="row">
            <app-facility-item *ngFor="let facility of facilityGroup.group" [facility]="facility"></app-facility-item>
          </div>
        </div>
        <div class="panel-footer">
          <span class="btn btn-default">Show Schedule</span>
        </div>
      </div>
    </div>
    `,
  styleUrls: ['./facilityGroup.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FacilityGroupComponent {
  @Input() facilityGroup: any;
}