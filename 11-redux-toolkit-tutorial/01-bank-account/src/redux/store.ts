import { createStore } from "redux";

interface State {
  balance: number;
  loan: number;
  loanPurpose: string;
}

interface Action {
  type: string;
  payload?: { account: number; purpose?: string };
}

const initialState: State = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

export const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case "account/deposit":
      return {
        ...state,
        balance: state.balance + (action.payload?.account ?? 0),
      };
    case "account/withdraw":
      if (state.balance < (action.payload?.account ?? 0)) {
        console.error("Insufficient funds for withdrawal.");
        return state;
      }
      return {
        ...state,
        balance: state.balance - (action.payload?.account ?? 0),
      };
    case "account/requestLoan":
      if (state.loan > 0) {
        console.error("Loan already exists.");
        return state;
      }
      return {
        ...state,
        loan: action.payload?.account ?? 0,
        loanPurpose: action.payload?.purpose ?? "",
      };
    case "account/payLoan":
      if (state.balance < state.loan) {
        console.error("Insufficient funds to pay the loan.");
        return state;
      }
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };
    default:
      return state;
  }
};

export const store = createStore(reducer);

// Example usage
store.dispatch({ type: "account/deposit", payload: { account: 500 } });
store.dispatch({ type: "account/withdraw", payload: { account: 100 } });
store.dispatch({
  type: "account/requestLoan",
  payload: { account: 300, purpose: "Buy a car" },
});
store.dispatch({ type: "account/payLoan" });

console.log(store.getState());
