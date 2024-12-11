import { useQuery } from "@tanstack/react-query";

const url =
  "https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new";

const getCryptoNumber = async (): Promise<number> => {
  const res = await fetch(url).then((res) => res.json());
  return +res;
};

function App() {
  const { isLoading, isFetching, data, error, refetch } = useQuery({
    queryKey: ["randomNumber"],
    queryFn: getCryptoNumber,
  });

  return (
    <>
      {isFetching ? <h1>Loading...</h1> : <h1>Numero: {data}</h1>}
      {error && <h2 style={{ color: "red" }}>Error: {error.message}</h2>}
      <button disabled={isFetching} onClick={() => refetch()}>
        Nuevo numero
      </button>
    </>
  );
}

export default App;
