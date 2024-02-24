import { City } from "./City";

export type Action =
  | { type: "loading" }
  | { type: "cities/loaded"; payload: City[] }
  | { type: "city/loaded"; payload: City }
  | { type: "city/created"; payload: City }
  | { type: "city/deleted"; payload: number }
  | { type: "rejected"; payload: string };

export type State = {
  isLoading: boolean;
  cities: City[];
  currentCity: City | null;
  error: string | null;
};
