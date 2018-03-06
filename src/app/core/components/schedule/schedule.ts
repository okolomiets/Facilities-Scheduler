import {
  Component,
  Input,
  Output,
  OnInit,
  AfterViewInit,
  ElementRef,
  EventEmitter,
  ChangeDetectionStrategy, OnChanges, SimpleChanges
} from '@angular/core';
import * as $ from 'jquery';
import 'fullcalendar';
import { Options } from 'fullcalendar';
import { Event } from '../../models/event';

@Component({
  template: '<div></div>',
  selector: 'app-fullcalendar',
  styleUrls: ['./schedule.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScheduleComponent implements OnInit, AfterViewInit, OnChanges {

  @Input() options: Options;
  @Input() events: Event[];
  @Output() select = new EventEmitter<any>();

  constructor(private element: ElementRef) { }

  ngOnInit() {
    this.options.dayClick = this.onSelect.bind(this);
  }

  ngAfterViewInit() {
    $(this.element.nativeElement).fullCalendar({...this.options, events: this.events});
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes.events.firstChange) {
      const changedEvents = [...changes.events.currentValue];
      $(this.element.nativeElement).fullCalendar('removeEvents');
      $(this.element.nativeElement).fullCalendar('renderEvents', changedEvents, true);
    }
  }

  onSelect(date, jsEvent, view) {
    this.select.emit({ date, jsEvent, view });
  }
}
