import { useOptimistic, useTransition } from "react";
import { Planet } from "../../interfaces/planet.interface";
import { updatePlanetAction } from "../../actions";

interface Props {
  planets: Planet[];
}

export const PlanetList = ({ planets }: Props) => {
  const [isPending, startTransition] = useTransition();

  // Se usa `useOptimistic` para gestionar los cambios optimistas de los planetas.
  // Este hook mantiene el estado de los planetas con la posibilidad de actualizarlo
  // de manera optimista mientras se espera la respuesta de una operación asíncrona.
  const [optimisticPlanets, setOptimisticNewPlanets] = useOptimistic(
    planets, // El estado inicial es el listado de planetas pasado como prop.
    (current, newPlanet: Planet) => { // Esta función se ejecuta cuando se realiza una actualización optimista.
      const updatedPlanets = current.map((planet) =>
        planet.id === newPlanet.id ? newPlanet : planet // Reemplaza el planeta en la lista con el nuevo.
      );
      return updatedPlanets; // Devuelve la nueva lista de planetas con el planeta actualizado.
    }
  );

  // Función para manejar la actualización de un planeta
  const handleUpdatePlanet = async (planet: Planet) => {
    startTransition(async () => {
      const data = {
        ...planet,
        name: planet.name.toUpperCase(), // Simula una actualización (en este caso, poniendo el nombre en mayúsculas).
      };

      try {
        // Se actualizan los planetas de manera optimista (sin esperar la respuesta de la API).
        setOptimisticNewPlanets(data);
        // Se realiza la actualización real en el servidor o API.
        const updatedPlanet = await updatePlanetAction(data);
        // Una vez que la actualización es exitosa, se aplica el nuevo planeta actualizado.
        setOptimisticNewPlanets(updatedPlanet);
      } catch (error) {
        console.log(error);
        // Si ocurre un error, se revierte la actualización optimista y se mantiene el planeta original.
        setOptimisticNewPlanets(planet);
      }
    });
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 animate-fadeIn">
      {optimisticPlanets.map((planet) => (
        <div
          key={planet.id}
          className="bg-white p-4 rounded-lg border border-blue-600 shadow-md hover:shadow-lg transition-all"
        >
          {/* Contenido superior */}
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#c5c9f4] text-[#5964e0] flex items-center justify-center rounded-full text-xl font-bold">
                {planet.name.charAt(0)} 
              </div>
              <div>
                <h3 className="text-md font-semibold text-gray-800 truncate">
                  {planet.name} 
                </h3>
                <p className="text-green-600 text-xs">{planet.type}</p>
              </div>
            </div>
            <span className="text-gray-500 text-xs whitespace-nowrap">
              {planet.distanceFromSun} 
            </span>
          </div>

          {/* Botón para actualizar el planeta */}
          <button
            className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 text-white py-2 px-3 rounded-md text-sm transition-colors"
            onClick={() => handleUpdatePlanet(planet)} 
            disabled={isPending} 
          >
            Actualizar planeta
          </button>
        </div>
      ))}
    </div>
  );
};
