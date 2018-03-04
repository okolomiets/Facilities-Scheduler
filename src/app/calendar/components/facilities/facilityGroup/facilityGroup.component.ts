import {ChangeDetectionStrategy, Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-facility-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="col-md-12">
      <div class="panel panel-default">
        <div class="panel-heading">{{facilityGroup.name}}<span class="label label-default">{{facilityGroup.price | currency}}</span></div>
        <div class="panel-body">
          <div>
            <p>
              Lorem ipsum dolor sit amet, ea homero rationibus per.
              Cum enim electram at.
              Cu vis omittam persecuti, eam ex legimus alienum omittantur.
              Error laudem explicari ea pri, id vel maluisset instructior.
            </p>
          </div>
          <div class="row">
            <app-facility-item *ngFor="let facility of facilityGroup.group" [facility]="facility"></app-facility-item>
          </div>
        </div>
        <div class="panel-footer">
          <span class="btn btn-default" [routerLink]="['/calendar', facilityGroup.id]">Show Schedule</span>
        </div>
      </div>
    </div>
    `
})
export class FacilityGroupComponent {
  @Input() facilityGroup: any;
}
