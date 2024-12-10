import { useReducer } from "react";
import { reducer } from "./02-reducer";
import { DECREMENT, INCREMENT } from "./02-actions";

export const DateCounter = () => {
  // const [count, setCount] = useState<number>(0);
  // const [step, setStep] = useState<number>(1);
  const initialState = { count: 0, step: 1 };

  // Inicializa el estado del contador con useReducer
  // state -> valor con un state
  // dispatch -> function para actualizar el state (valor)
  // reducer -> function donde se realizan las acciones
  const [state, dispatch] = useReducer(reducer, initialState);
  const { count, step } = state;

  // Calcula la fecha basada en el contador
  const date = new Date("June 21, 2027");
  date.setDate(date.getDate() + count);

  const dec = () => {
    dispatch({ type: DECREMENT });
  };

  const inc = () => {
    dispatch({ type: INCREMENT });
  };

  const defineStep = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    dispatch({ type: "SET_STEP", payload: Number(e.target.value) });
  };

  const reset = () => {
    dispatch({ type: "RESET", payload: 0 });
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="1"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button className="btn" onClick={dec}>
          -
        </button>
        <span>{count}</span>
        <button className="btn" onClick={inc}>
          +
        </button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button className="btn" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};
