import { useState } from "react";

export const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "rick harris",
    age: 24,
    hobby: "build svelte",
  });

  const displayPerson = () => {
    setPerson({ name: "evan you", age: 28, hobby: "build vue" });
    // be careful, don't overwrite
    // setPerson({ name: 'susan' });
    // setPerson({ ...person, name: 'susan' });
  };
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>Enjoys To: {person.hobby}</h4>
      <button className="btn" onClick={displayPerson}>
        show evan
      </button>
    </>
  );
};
