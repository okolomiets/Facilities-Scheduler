export interface Facility {
  id: number;
  name: string;
  photoUrl?: string;
  description?: string;
  price: number;
  group?: any;
}

export interface FacilityEntities {
  [key: string]: Facility;
}
