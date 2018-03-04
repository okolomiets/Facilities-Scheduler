export interface Event {
  facilityId: number;
  title: string;
  start: string;
  end?: string;
  allDay?: boolean;
  color?: string;
  textColor?: string;
}
