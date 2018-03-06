import { Component, Input, OnInit } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-facility-schedule-modal',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">{{facility.name}} - New Event</h4>
    </div>
    <div class="modal-body">
      <form [formGroup]="form" class="form-horizontal">
        <div class="form-group">
          <label for="title" class="col-sm-2 control-label">Title</label>
          <div class="col-sm-10">
            <input formControlName="title" type="text" class="form-control" id="title" placeholder="">
          </div>
        </div>
        <div class="form-group">
          <label for="start" class="col-sm-2 control-label">Start time</label>
          <div class="col-sm-10">
            <input formControlName="start" type="text" class="form-control" id="start" placeholder="">
          </div>
        </div>
        <div class="form-group" [hidden]="allDay">
          <label for="duration" class="col-sm-2 control-label">Duration (hrs)</label>
          <div class="col-sm-10">
            <input formControlName="duration" type="number" [min]="1" [max]="8" class="form-control" id="duration" placeholder="">
          </div>
        </div>
        <div class="form-group" [hidden]="!allDay">
          <div class="col-sm-offset-2 col-sm-10">
            <div class="checkbox">
              <label>
                <input formControlName="allDay" type="checkbox"> All day
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-default" (click)="cancel()">Cancel</button>
      <button type="button" [disabled]="!form.valid" class="btn btn-default" (click)="addSchedule()">Add</button>
    </div>
  `
})
export class FacilityScheduleModalComponent implements OnInit {
  @Input() start;
  @Input() facility;
  scheduleDate: {
    title: string;
    start: string;
    duration?: string;
    end?: string;
    allDay: boolean;
  };
  allDay = false;
  form: FormGroup;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {
    this.allDay = /^\d{4}-\d{2}-\d{2}$/i.test(this.start.format());
    this.form = new FormGroup({
      title: new FormControl('', Validators.required),
      start: new FormControl({ value: this.start.format(), disabled: true }),
      duration: new FormControl(1),
      allDay: new FormControl({ value: this.allDay, disabled: this.allDay }),
    });
  }

  addSchedule() {
    const formValue = this.form.getRawValue();
    const end = this.start.add(formValue.duration, 'h').format();
    this.scheduleDate = { ...formValue, end };
    this.activeModal.close(this.scheduleDate);
  }

  cancel() {
    this.activeModal.dismiss();
  }
}
