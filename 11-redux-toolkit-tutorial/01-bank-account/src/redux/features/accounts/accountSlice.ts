import { ThunkAction } from "redux-thunk";
import { RootState } from "../../store";

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

interface ConvertingCurrencyAction {
  type: "account/convertingCurrency";
  payload: boolean; // La acción ahora incluye un payload que indica si está cargando
}

type AccountAction =
  | DepositAction
  | WithdrawAction
  | RequestLoanAction
  | PayLoanAction
  | ConvertingCurrencyAction; // Aquí incluimos todas las acciones

// Estado inicial de la cuenta
interface State {
  balance: number;
  loan: number;
  loanPurpose: string;
  isLoading: boolean;
}

export const initialStateAccount: State = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};

// Reducer para la cuenta
export const accountReducer = (
  state: State = initialStateAccount,
  action: AccountAction
): State => {
  switch (action.type) {
    case "account/deposit":
      return {
        ...state,
        balance: state.balance + action.payload,
        isLoading: false,
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
    case "account/convertingCurrency":
      return { ...state, isLoading: action.payload }; // Aquí el payload indica si está cargando
    default:
      return state;
  }
};

// Funciones de acción
export function deposit(
  amount: number,
  currency: string
): ThunkAction<void, RootState, unknown, AccountAction> {
  // Si la moneda es USD, no se requiere conversión
  if (currency === "USD") {
    return (dispatch) => {
      dispatch({ type: "account/deposit", payload: amount });
    };
  }

  return async function (dispatch) {
    dispatch({ type: "account/convertingCurrency", payload: true }); // Empieza la conversión
    try {
      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
      );
      const data = await res.json();
      const converted = data.rates.USD;
      dispatch({ type: "account/deposit", payload: converted });
    } catch (error) {
      console.error(error);
    } finally {
      dispatch({ type: "account/convertingCurrency", payload: false }); // Termina la conversión
    }
  };
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
