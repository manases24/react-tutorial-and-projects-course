import { useState } from "react";
import { data } from "../../api";

export const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id: number) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  
  return (
    <div>
      {people.map(({ id, name }) => {
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      <button
        className="btn"
        style={{ marginTop: "2rem" }}
        onClick={() => setPeople([])}
      >
        clear items
      </button>
    </div>
  );
};
