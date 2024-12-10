import { useState } from "react";
import { List } from "./List";
import { people as data } from "./api";

function App() {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>{people.length} atos team</h3>
        <List people={people} />
        <button
          type="button"
          className="btn btn-block"
          onClick={() => setPeople([])}
        >
          clear list
        </button>
      </section>
    </main>
  );
}

export default App;
