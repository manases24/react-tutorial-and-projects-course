import { useActionState } from "react";
import { Planet } from "../../interfaces/planet.interface";
import { createPlanetActionForm } from "../../actions";
import { SubmitButton } from "./SubmitButton";

interface Props {
  onAddPlanet: (planet: Planet) => void;
}

export const EditPlanetForm = ({ onAddPlanet }: Props) => {
  const [state, formAction, isPending] = useActionState(
    async (prevState: unknown, queryData: FormData) => {
      const planet = await createPlanetActionForm(prevState, queryData);
      onAddPlanet(planet);
    },
    null
  );

  return (
    <form className="mb-4 flex flex-col md:flex-row" action={formAction}>
      <input
        className="mb-2 md:mb-0 md:mr-2 p-2 border border-gray-300 rounded flex-1"
        type="text"
        placeholder="Nombre del planeta"
        name="name"
        required
      />
      <input
        className="mb-2 md:mb-0 md:mr-2 p-2 border border-gray-300 rounded flex-1"
        type="text"
        placeholder="Tipo de astro"
        name="type"
        required
      />
      <input
        className="mb-2 md:mb-0 md:mr-2 p-2 border border-gray-300 rounded flex-1"
        type="text"
        placeholder="Distancia del sol"
        name="distanceFromSun"
        required
      />
      <SubmitButton />
      {/* <button
        className="bg-blue-500 text-white p-2 rounded flex-1 sm:flex-none disabled:bg-gray-500"
        type="submit"
        disabled={isPending}
      >
        {isPending ? "Agregando..." : "Agregar planeta"}
      </button> */}
    </form>
  );
};
