import { people, PersonType } from "../../api";
import { Person } from "./Person";

export function List() {
  return (
    <div>
      {people.map((person: PersonType) => {
        return <Person key={person.id} {...person} />;
      })}
    </div>
  );
}
