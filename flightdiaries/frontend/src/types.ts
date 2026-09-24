//import { z } from "zod";

export const Weather = {
  Sunny: "sunny",
  Windy: "windy",
  Cloudy: "cloudy",
  Rainy: "rainy",
  Stormy: "stormy",
} as const;

export type Weather = (typeof Weather)[keyof typeof Weather];

export const Visibility = {
  Good: "good",
  Great: "great",
  Poor: "poor",
  Ok: "ok",
} as const;

export type Visibility = (typeof Visibility)[keyof typeof Visibility];

export type NewDiary = Omit<Diary, "id">;

export interface Diary {
  id: number;
  weather: Weather;
  visibility: Visibility;
  date: string;
  //comment: string;
}
