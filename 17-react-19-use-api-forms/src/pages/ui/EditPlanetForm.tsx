export const EditPlanetForm = () => {
  return (
    <form className="mb-4 flex flex-col md:flex-row">
      <input
        type="text"
        placeholder="Nombre del planeta"
        className="mb-2 md:mb-0 md:mr-2 p-2 border border-gray-300 rounded flex-1"
      />
      <input
        type="text"
        placeholder="Tipo de planeta"
        className="mb-2 md:mb-0 md:mr-2 p-2 border border-gray-300 rounded flex-1"
      />
      <input
        type="text"
        placeholder="Distancia del sol"
        className="mb-2 md:mb-0 md:mr-2 p-2 border border-gray-300 rounded flex-1"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded flex-1 sm:flex-none"
      >
        Agregar planeta
      </button>
    </form>
  );
};
