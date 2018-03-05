import {Component, Input, OnInit} from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-facility-schedule-modal',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Facility Schedule</h4>
    </div>
    <div class="modal-body">
      <p>date from select: {{date}}</p>
      <!--<p-calendar [(ngModel)]="scheduleDate" [inline]="true"></p-calendar>-->
      <!--<p>date from datepicker: {{scheduleDate}}</p>-->
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class FacilityScheduleModalComponent {
  @Input() date;
  // scheduleDate: any;

  constructor(public activeModal: NgbActiveModal) {}
}
