import {
  Component,
  Input,
  Output,
  OnInit,
  AfterViewInit,
  ElementRef,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';
import * as $ from 'jquery';
import 'fullcalendar';
import {Options} from 'fullcalendar';

@Component({
  template: '<div></div>',
  selector: 'app-fullcalendar',
  styleUrls: ['./calendar.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarComponent implements OnInit, AfterViewInit {

  @Input() options: Options;
  @Input() events: Object;
  @Output() select = new EventEmitter<any>();

  constructor(private element: ElementRef) { }

  ngOnInit() {
    this.options.dayClick = this.onSelect.bind(this);
  }

  ngAfterViewInit() {
    $(this.element.nativeElement).fullCalendar({...this.options, events: this.events});
  }

  onSelect(date, jsEvent, view) {
    this.select.emit({ date, jsEvent, view });
  }

  /*

  fullCalendar(...args: any[]) {
    if (!args) {
      return;
    }
    switch (args.length) {
      case 0:
        return;
      case 1:
        return $(this.element.nativeElement).fullCalendar(args[0]);
      case 2:
        return $(this.element.nativeElement).fullCalendar(args[0], args[1]);
      case 3:
        return $(this.element.nativeElement).fullCalendar(args[0], args[1], args[2]);
    }
  }

  updateEvent(event) {
    return $(this.element.nativeElement).fullCalendar('updateEvent', event);
  }

  clientEvents(idOrFilter) {
    return $(this.element.nativeElement).fullCalendar('clientEvents', idOrFilter);
  }

  */
}
