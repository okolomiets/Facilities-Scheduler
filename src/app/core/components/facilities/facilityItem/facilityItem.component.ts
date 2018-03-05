import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-facility-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="col-md-6 facility-item">
      <div class="panel panel-default">
        <div class="panel-heading">{{facility.name}}<span class="label label-default">{{facility.price | currency}}</span></div>
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
        </div>
      </div>
    </div>
    `
})
export class FacilityItemComponent {
  @Input() facility: any;
}
