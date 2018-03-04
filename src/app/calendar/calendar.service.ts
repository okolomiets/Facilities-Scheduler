import {Injectable} from '@angular/core';

@Injectable()
export class CalendarService {

  getFacilities() {}

  getEvents() {
    return [
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
}
