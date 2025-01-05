import { combineReducers, createStore } from "redux";

// Definir los tipos de las acciones
interface DepositAction {
  type: "account/deposit";
  payload: number;
}

interface WithdrawAction {
  type: "account/withdraw";
  payload: number;
}

interface RequestLoanAction {
  type: "account/requestLoan";
  payload: { amount: number; purpose: string };
}

interface PayLoanAction {
  type: "account/payLoan";
}

type Action =
  | DepositAction
  | WithdrawAction
  | RequestLoanAction
  | PayLoanAction;

// Estado inicial de la cuenta
interface State {
  balance: number;
  loan: number;
  loanPurpose: string;
}

export const initialStateAccount: State = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

// Reducer para la cuenta
export const accountReducer = (
  state: State = initialStateAccount,
  action: Action
): State => {
  switch (action.type) {
    case "account/deposit":
      return {
        ...state,
        balance: state.balance + action.payload,
      };
    case "account/withdraw":
      if (state.balance < action.payload) {
        console.error("Insufficient funds for withdrawal.");
        return state;
      }
      return {
        ...state,
        balance: state.balance - action.payload,
      };
    case "account/requestLoan":
      if (state.loan > 0) {
        console.error("Loan already exists.");
        return state;
      }
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
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

// Funciones de acción
export function deposit(amount: number): DepositAction {
  return { type: "account/deposit", payload: amount };
}

export function withdraw(amount: number): WithdrawAction {
  return { type: "account/withdraw", payload: amount };
}

export function requestLoan(
  amount: number,
  purpose: string
): RequestLoanAction {
  return {
    type: "account/requestLoan",
    payload: { amount, purpose },
  };
}

export function payLoan(): PayLoanAction {
  return { type: "account/payLoan" };
}
