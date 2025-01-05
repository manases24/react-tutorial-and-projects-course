import { createStore, combineReducers } from "redux";

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
export const customerReducer = (
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

export function createCustomer(
  fullName: string,
  nationalID: string
): CreateCustomerAction {
  return {
    type: "customer/createCustomer",
    payload: { fullName, nationalID, createdAt: new Date().toISOString() },
  };
}
