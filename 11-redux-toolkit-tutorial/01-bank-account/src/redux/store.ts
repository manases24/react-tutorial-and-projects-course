import { combineReducers, createStore } from "redux";
import { accountReducer } from "./features/accounts/accountSlice";
import { customerReducer } from "./features/customers/customerSlice";

// Combinar los reducers
const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
export type AppDispatch = typeof store.dispatch;

// Crear el store con el rootReducer combinado
export const store = createStore(rootReducer);
