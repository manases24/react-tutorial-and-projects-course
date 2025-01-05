import { createStore, combineReducers } from "redux";

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

// Definir los tipos de las acciones del cliente
interface CreateCustomerAction {
  type: "customer/createCustomer";
  payload: {
    fullName: string;
    nationalID: string;
    createdAt: string;
  };
}

interface UpdateNameAction {
  type: "customer/updateName";
  payload: string;
}

type CustomerAction = CreateCustomerAction | UpdateNameAction;

// Estado inicial de la cuenta
interface State {
  balance: number;
  loan: number;
  loanPurpose: string;
}

const initialStateAccount: State = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

// Reducer para la cuenta
const accountReducer = (
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

// Estado inicial del cliente
interface StateCustomer {
  fullName: string;
  nationalID: string;
  createdAt: string;
}

const initialStateCustomer: StateCustomer = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

// Reducer para el cliente
const customerReducer = (
  state = initialStateCustomer,
  action: CustomerAction
) => {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      };
    case "customer/updateName":
      return { ...state, fullName: action.payload };
    default:
      return state;
  }
};

// Combinar los reducers
const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

// Crear el store con el rootReducer combinado
export const store = createStore(rootReducer);

// Funciones de acción
function deposit(amount: number): DepositAction {
  return { type: "account/deposit", payload: amount };
}

function withdraw(amount: number): WithdrawAction {
  return { type: "account/withdraw", payload: amount };
}

function requestLoan(amount: number, purpose: string): RequestLoanAction {
  return {
    type: "account/requestLoan",
    payload: { amount, purpose },
  };
}

function payLoan(): PayLoanAction {
  return { type: "account/payLoan" };
}

function createCustomer(
  fullName: string,
  nationalID: string
): CreateCustomerAction {
  return {
    type: "customer/createCustomer",
    payload: { fullName, nationalID, createdAt: new Date().toISOString() },
  };
}

// function updateName(fullName: string) {
//   return { type: "customer/updateName", payload: fullName };
// }

// Ejemplo de uso de las funciones de acción
store.dispatch(deposit(500));
console.log(store.getState());

store.dispatch(withdraw(200));
console.log(store.getState());

store.dispatch(requestLoan(1000, "Buy a car"));
console.log(store.getState());

store.dispatch(payLoan());
console.log(store.getState());

store.dispatch(createCustomer("Jonas Schmedtmann", "24343434"));
store.dispatch(deposit(250));
console.log(store.getState());
