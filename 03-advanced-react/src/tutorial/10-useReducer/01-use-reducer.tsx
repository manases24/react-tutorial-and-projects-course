import { useReducer } from "react";
import { reducer } from "./01-reducer";
import { CLEAR_LIST, REMOVE_ITEM, RESET_LIST } from "./01-actions";
import { people as data } from "../../api";

const initialState = {
  people: data,
};

export const UseReducer = () => {

  // El hook useReducer tiene: un Objeto action, una function de envio, un reducer y un Objeto state
  // state -> valor con un state - el state suele ser un Objeto
  // dispatch -> function para realizar desencadenar acciones cuando escucha un evento
  // para actualizar el state, enviamos un dispatch al manejador de eventos
  // reducer -> function donde se realizan las acciones
  // La actualizacion del state realizara un re-render (nuevo renderizado)
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearList = () => {
    dispatch({ type: CLEAR_LIST });
  };

  const removeItem = (id: string) => {
    dispatch({ type: REMOVE_ITEM, payload: { id } });
  };

  const resetList = () => {
    dispatch({ type: RESET_LIST });
  };

  return (
    <div>
      {state.people.map(({ id, name }) => {
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      {state.people.length < 1 ? (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={resetList}
        >
          reset
        </button>
      ) : (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={clearList}
        >
          clear
        </button>
      )}
    </div>
  );
};
