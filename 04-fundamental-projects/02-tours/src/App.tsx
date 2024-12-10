import { useFetch } from "./hooks/useFetch";
import { Loading } from "./Loading";
import { Tours } from "./Tours";

const url = "https://www.course-api.com/react-tours-project";

function App() {
  const { tours, setTours, loading, fetchData } = useFetch(url);

  const removeTour = (id: string) => {
    const newItem = tours.filter((tour) => tour.id !== id);
    setTours(newItem);
  };

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={() => fetchData()}>
            refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
