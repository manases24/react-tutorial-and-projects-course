import { useReducer } from "react";
import { reducer } from "./reducer";
import { people as data } from "../../api";
import { CLEAR_LIST, REMOVE_ITEM, RESET_LIST } from "./actions";

const initialState = {
  people: data,
};

export const UseReducer = () => {
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
