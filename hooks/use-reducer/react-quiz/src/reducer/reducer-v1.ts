import { DECREMENT, INCREMENT } from "./actions";

// Define el tipo del estado
type State = number;

// Define el tipo de las acciones
interface IncrementAction {
  type: typeof INCREMENT;
}

interface DecrementAction {
  type: typeof DECREMENT;
}

// Unión de tipos de acción
type Action = IncrementAction | DecrementAction;

export const reducerV1 = (state: State, action: Action): State => {
  if (action.type === INCREMENT) return state + 1;
  if (action.type === DECREMENT) return state - 1;
  return state;
};
