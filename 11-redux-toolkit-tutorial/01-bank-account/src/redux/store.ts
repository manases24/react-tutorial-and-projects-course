import { configureStore } from "@reduxjs/toolkit";
import { accountReducer } from "./features/accounts/accountSlice";
import { customerReducer } from "./features/customers/customerSlice";

export const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
