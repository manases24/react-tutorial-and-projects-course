import { FC, useEffect, useState } from "react";
import { Planet } from "../interfaces/planet.interface";
import { planetsApi } from "../api/planetsApi";
import { EditPlanetForm } from "./ui/EditPlanetForm";

const Planets: FC = () => {
  const [planets, setPlanets] = useState<Planet[]>([]);

  useEffect(() => {
    planetsApi.get("/").then((res) => {
      setPlanets(res.data);
    });
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Planetas del Sistema Solar</h1>

      {/* Formulario para agregar un planeta */}
      <EditPlanetForm />

      {/* Lista de planetas Grid*/}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {planets.map((planet) => (
          <div key={planet.id} className="p-4 bg-gray-100 rounded shadow">
            <h2 className="text-xl font-semibold">{planet.name}</h2>
            <p className="text-gray-700">{planet.type}</p>
            <p className="text-gray-700">{planet.distanceFromSun}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Planets;
