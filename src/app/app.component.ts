import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  calendarOptions: Object;
  events: Object;
  calendarEvents = new Subject();
  displayCalendar = true;

  constructor( ) { }

  ngOnInit() {
    this.calendarOptions = {
      height: 'auto',
      fixedWeekCount : false,
      selectable: false,
      editable: false,
      defaultView: 'agendaWeek',
      slotDuration: '01:00:00',
      minTime: '08:00:00',
      maxTime: '21:00:00',
      slotEventOverlap: false,
      eventLimit: false, // allow "more" link when too many events
      header: {
        left: 'agendaWeek,month,listWeek',
        center: 'title',
        right: 'addEventButton today prev,next'
      },
    };

    this.calendarEvents.subscribe(data => {
      this.events = data;
    });

    this.events = [
      {
        title: 'Meeting',
        start: '2018-03-12T10:00:00',
        end: '2018-03-12T12:00:00'
      },
      {
        title: 'Lunch',
        start: '2018-03-12T12:00:00'
      },
      {
        title: 'Meeting',
        start: '2018-03-12T14:00:00'
      },
      {
        title: 'Happy Hour',
        start: '2018-03-12T17:00:00'
      },
      {
        title: 'Dinner',
        start: '2018-03-12T20:00:00'
      },
      {
        title: 'Birthday Party',
        start: '2018-03-13T07:00:00'
      }
    ];
  }

  onSelect({date, jsEvent, view}) {
    console.log('onSelect view', view.type);
    console.log('onSelect date', date.format());
    // this.store.dispatch(new fromStore.VisualiseToppings(event));
  }

  onClick() {
      this.displayCalendar = !this.displayCalendar;
  }

  onSubmit() {
    this.calendarEvents.next({});
  }

}
