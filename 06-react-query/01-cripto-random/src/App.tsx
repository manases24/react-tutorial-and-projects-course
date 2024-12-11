import { useRandom } from "./hooks/useRandom";

function App() {
  const { randomQuery } = useRandom();

  return (
    <>
      {randomQuery.isFetching ? (
        <h1>Loading...</h1>
      ) : (
        <h1>Numero: {randomQuery.data}</h1>
      )}
      {randomQuery.error && (
        <h2 className="error-message">Error: {randomQuery.error.message}</h2>
      )}

      <button
        disabled={randomQuery.isFetching}
        onClick={() => randomQuery.refetch()}
      >
        Nuevo numero
      </button>
    </>
  );
}

export default App;
