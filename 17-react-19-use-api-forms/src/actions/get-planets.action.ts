import { planetsApi } from "../api/planetsApi";
import type { Planet } from "../interfaces/planet.interface";

export const getPlanets = async (): Promise<Planet[]> => {
  const res = await planetsApi.get("/");
  return res.data;
};
