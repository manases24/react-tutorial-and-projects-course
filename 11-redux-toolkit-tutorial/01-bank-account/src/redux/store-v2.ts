import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import { accountReducer } from "./features/accounts/accountSlice-v1";
import { customerReducer } from "./features/customers/customerSlice-v1";

// Combinar los reducers
const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
export type AppDispatch = typeof store.dispatch;

// Crear el store con el rootReducer combinado
export const store = createStore(rootReducer, applyMiddleware(thunk));
