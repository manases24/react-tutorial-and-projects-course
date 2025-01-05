import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Definir el tipo de los datos del cliente
interface StateCustomer {
  fullName: string;
  nationalID: string;
  createdAt: string;
}

// Estado inicial del cliente
const initialStateCustomer: StateCustomer = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

// Crear el slice para el cliente
const customerSlice = createSlice({
  name: "customer",
  initialState: initialStateCustomer,
  reducers: {
    createCustomer: (
      state,
      action: PayloadAction<{ fullName: string; nationalID: string }>
    ) => {
      state.fullName = action.payload.fullName;
      state.nationalID = action.payload.nationalID;
      state.createdAt = new Date().toISOString();
    },
    updateName: (state, action: PayloadAction<string>) => {
      state.fullName = action.payload;
    },
  },
});

// Exportar las acciones
export const { createCustomer, updateName } = customerSlice.actions;

export const customerReducer = customerSlice.reducer;

// Exportar el reducer para configurarlo en el store
export default customerSlice.reducer;
