import { CLEAR_LIST, REMOVE_ITEM, RESET_LIST } from "./01-actions";
import { people as data, DataType } from "../../api";

interface State {
  people: DataType[];
}

interface Action {
  type: string;
  payload?: { id: string };
}

// Reducer es una function que actualiza el estado (state)
// La function reducer toma dos parametros (un state y un action)
// El state se lo crea como un Objeto
// El state en React es inmutable, por eso reducer siempre debe devolver un nuevo state en funcion del estado actual y de la accion a realizar
// Action es simplemente un objeto que describe como debe actualizarse el estado (state)
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
