import { useEffect, useState } from "react";

const url =
  "https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new";

function App() {
  const [number, setNumber] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [refreshToken, setRefreshToken] = useState(0);
  const [error, setError] = useState<Error | null>(null); // Especificamos que el tipo de error es Error o null

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("Oops...");
        }

        const data = await res.json();
        setNumber(data);
        setIsLoading(false);
      } catch (error: unknown) { // Le decimos a TypeScript que el error es de tipo unknown
        setIsLoading(false);
        if (error instanceof Error) { // Aseguramos que error es una instancia de Error
          setError(error); // Ahora podemos usarlo sin problemas
        } else {
          setError(new Error("An unknown error occurred")); // Si no es un error, lo manejamos
        }
      }
    };
    fetchData();
  }, [refreshToken]);

  return (
    <>
      {isLoading ? <h1>Loading...</h1> : <h1>Numero: {number}</h1>}
      {error && <h2 style={{ color: 'red' }}>Error: {error.message}</h2>}
      <button
        disabled={isLoading}
        onClick={() => setRefreshToken(refreshToken + 1)}
      >
        Nuevo numero
      </button>
    </>
  );
}

export default App;
