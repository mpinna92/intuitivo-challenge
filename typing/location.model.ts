export interface Location {
  id: number;
  name: string;
  countryId: number;
  latitude?: string;
  longitude?: string;
}

export const LocationInitalValue: Location = {
  id: 1,
  name: "",
  countryId: 1,
  latitude: "",
  longitude: "",
};
