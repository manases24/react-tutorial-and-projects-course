import { INCREMENT, DECREMENT } from "./02-actions";

// Define el tipo del estado
interface State {
  count: number;
  step: number;
}

// Define el tipo de las acciones
interface IncrementAction {
  type: typeof INCREMENT;
}

interface DecrementAction {
  type: typeof DECREMENT;
}

interface SetStepAction {
  type: "SET_STEP" | "RESET";
  payload: number;
}

// Unión de tipos de acción
type Action = IncrementAction | DecrementAction | SetStepAction;

// Function para manejar un store
// El store se suele guardar en un state y el state se lo crea como un Objeto
export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + state.step };
    case DECREMENT:
      return { ...state, count: state.count - state.step };
    case "SET_STEP":
      return { ...state, step: action.payload };
    case "RESET":
      return { ...state, step: action.payload };
    default:
      return state;
  }
};
