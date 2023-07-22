import { Schema, model } from "mongoose";

export interface ICoordinates {
  lat: number;
  lng: number;
}

export interface ILocation {
  search: string;
  coordinates: ICoordinates;
}

export interface IVacation {
  name: string;
  slug: string;
  category: string;
  sku: string;
  description: string;
  location: ILocation;
  price: number;
  tags: string[];
  inSeason: boolean;
  available: boolean;
  requiresWaiver: boolean;
  maximumGuests: number;
  notes: string;
  packagesSold: number;
}

const vacationSchema = new Schema<IVacation>({
  name: String,
  slug: String,
  category: String,
  sku: String,
  description: String,
  location: {
    search: String,
    coordinates: {
      lat: Number,
      lng: Number,
    },
  },
  price: Number,
  tags: [String],
  inSeason: Boolean,
  available: Boolean,
  requiresWaiver: Boolean,
  maximumGuests: Number,
  notes: String,
  packagesSold: Number,
});

export const Vacation = model<IVacation>("Vacation", vacationSchema);

export const findVacations = (filter: Partial<IVacation> = {}) =>
  Vacation.find(filter);

export const findVacationSku = (sku: string) => Vacation.findOne({ sku });
