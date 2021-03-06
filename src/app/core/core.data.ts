export const Facilities = [
  {
    id: 1,
    name: 'Meeting Room A',
    photoUrl: 'assets/meeting_room.jpg',
    description: `Lorem ipsum dolor sit amet, ea homero rationibus per. Cum enim electram at.
          Cu vis omittam persecuti, eam ex legimus alienum omittantur.
          Error laudem explicari ea pri, id vel maluisset instructior.`,
    price: 10
  },
  {
    id: 2,
    name: 'Meeting Room B',
    photoUrl: 'assets/meeting_room2.jpg',
    description: `Lorem ipsum dolor sit amet, ea homero rationibus per. Cum enim electram at.
          Cu vis omittam persecuti, eam ex legimus alienum omittantur.
          Error laudem explicari ea pri, id vel maluisset instructior.`,
    price: 10
  },
  {
    id: 3,
    name: 'Meeting Point (Full)',
    description: `Lorem ipsum dolor sit amet, ea homero rationibus per. Cum enim electram at.
              Cu vis omittam persecuti, eam ex legimus alienum omittantur.
              Error laudem explicari ea pri, id vel maluisset instructior.`,
    price: 30,
    group: [
      {
        id: 31,
        name: 'Meeting Point (Space A)',
        photoUrl: 'assets/meeting_room3.jpg',
        description: `Lorem ipsum dolor sit amet, ea homero rationibus per. Cum enim electram at.
              Cu vis omittam persecuti, eam ex legimus alienum omittantur.
              Error laudem explicari ea pri, id vel maluisset instructior.`,
        price: 15
      },
      {
        id: 32,
        name: 'Meeting Point (Space B)',
        photoUrl: 'assets/meeting_room3.jpg',
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
    photoUrl: 'assets/basketball_court.jpg',
    description: `Lorem ipsum dolor sit amet, ea homero rationibus per. Cum enim electram at.
          Cu vis omittam persecuti, eam ex legimus alienum omittantur.
          Error laudem explicari ea pri, id vel maluisset instructior.`,
    price: 25
  }
];

export const Events = [
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
