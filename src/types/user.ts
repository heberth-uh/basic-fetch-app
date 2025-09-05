export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
}

export interface Address {
  city: string;
  street: string;
  suite: string;
  zipcode: string;
  geo: Geo;
}

export interface Geo {
  lat: number;
  lng: number;
}