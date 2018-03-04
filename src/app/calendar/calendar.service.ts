import { Injectable } from '@angular/core';

import { Event } from './models/event';
import { Facility } from './models/facility';

@Injectable()
export class CalendarService {

  getFacilities(): Facility[] {
    return [
      {
        id: 1,
        name: 'Meeting Room A',
        photoUrl: 'https://www.orega.com/media/372359/orega-canary-wharf-meeting-room.jpg',
        description: `Lorem ipsum dolor sit amet, ea homero rationibus per. Cum enim electram at.
          Cu vis omittam persecuti, eam ex legimus alienum omittantur.
          Error laudem explicari ea pri, id vel maluisset instructior.`,
        price: 10
      },
      {
        id: 2,
        name: 'Meeting Room B',
        photoUrl: 'https://www.orega.com/media/372359/orega-canary-wharf-meeting-room.jpg',
        description: `Lorem ipsum dolor sit amet, ea homero rationibus per. Cum enim electram at.
          Cu vis omittam persecuti, eam ex legimus alienum omittantur.
          Error laudem explicari ea pri, id vel maluisset instructior.`,
        price: 10
      },
      {
        id: 3,
        name: 'Meeting Point (Full)',
        price: 30,
        group: [
          {
            id: 31,
            name: 'Meeting Point (Space A)',
            photoUrl: 'https://www.orega.com/media/372359/orega-canary-wharf-meeting-room.jpg',
            description: `Lorem ipsum dolor sit amet, ea homero rationibus per. Cum enim electram at.
              Cu vis omittam persecuti, eam ex legimus alienum omittantur.
              Error laudem explicari ea pri, id vel maluisset instructior.`,
            price: 15
          },
          {
            id: 32,
            name: 'Meeting Point (Space B)',
            photoUrl: 'https://www.orega.com/media/372359/orega-canary-wharf-meeting-room.jpg',
            description: `Lorem ipsum dolor sit amet, ea homero rationibus per. Cum enim electram at.
              Cu vis omittam persecuti, eam ex legimus alienum omittantur.
              Error laudem explicari ea pri, id vel maluisset instructior.`,
            price: 20
          }
        ]
      },
      {
        id: 4,
        name: 'Basketball Court',
        photoUrl: 'http://files.leagueathletics.com/Images/Club/14101/1630789.jpg',
        description: `Lorem ipsum dolor sit amet, ea homero rationibus per. Cum enim electram at.
          Cu vis omittam persecuti, eam ex legimus alienum omittantur.
          Error laudem explicari ea pri, id vel maluisset instructior.`,
        price: 25
      }
    ];
  }

  getEvents(): Event[] {
    return [
      {
        facilityId: 1,
        title: 'Meeting',
        start: '2018-03-12T10:00:00',
        end: '2018-03-12T12:00:00'
      },
      {
        facilityId: 3,
        title: 'Lunch',
        start: '2018-03-12T12:00:00'
      },
      {
        facilityId: 2,
        title: 'Meeting',
        start: '2018-03-12T14:00:00'
      },
      {
        facilityId: 31,
        title: 'Happy Hour',
        start: '2018-03-12T17:00:00'
      },
      {
        facilityId: 4,
        title: 'Dinner',
        start: '2018-03-12T20:00:00'
      },
      {
        facilityId: 32,
        title: 'Birthday Party',
        start: '2018-03-13T07:00:00'
      }
    ];
  }
}
