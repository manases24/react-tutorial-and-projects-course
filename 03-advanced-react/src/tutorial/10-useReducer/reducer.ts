import { CLEAR_LIST, REMOVE_ITEM, RESET_LIST } from "./actions";
import { people as data, DataType } from "../../api";

interface State {
  people: DataType[];
}

interface Action {
  type: string;
  payload?: { id: string };
}

export const reducer = (state: State, action: Action) => {
  if (action.type === CLEAR_LIST) {
    return { ...state, people: [] };
  }

  if (action.type === RESET_LIST) {
    return { ...state, people: data };
  }

  if (action.type === REMOVE_ITEM) {
    if (!action.payload) {
      throw new Error(`REMOVE_ITEM action requires a payload`);
    }

    let newPeople = state.people.filter(
      //   El operador (!) llamado non-null assertion operator,
      //   le indica al compilador que un valor que podría ser null o undefined no lo es en ese punto del código.
      //   Esto fuerza a TypeScript a tratar el valor como si fuera definido.
      (person) => person.id !== action.payload!.id
    );

    return { ...state, people: newPeople };
  }

  throw new Error(`No matching "${action.type}" - action type`);
};
