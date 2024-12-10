import { Person } from "./Person";
import { FriendsType } from "./api";

interface ListProps {
  people: FriendsType[];
}

export const List = ({ people }: ListProps) => {
  return (
    <div>
      {people.map((person) => {
        return <Person key={person.id} {...person} />;
      })}
    </div>
  );
};
