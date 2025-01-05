import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../store-v2";

// Estado inicial de la cuenta
interface State {
  balance: number;
  loan: number;
  loanPurpose: string;
  isLoading: boolean;
}

const initialState: State = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};

// Definir thunk para conversión de divisas
export const convertCurrency = createAsyncThunk(
  "account/convertCurrency",
  async (params: { amount: number; currency: string }, { dispatch }) => {
    if (params.currency === "USD") {
      return params.amount;
    }

    dispatch(setLoading(true)); // Empieza la conversión

    try {
      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=${params.amount}&from=${params.currency}&to=USD`
      );
      const data = await res.json();
      return data.rates.USD;
    } catch (error) {
      console.error(error);
      return 0; // Si ocurre un error, devolvemos 0 como valor
    } finally {
      dispatch(setLoading(false)); // Termina la conversión
    }
  }
);

// Slice para la cuenta
const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    deposit(state, action: PayloadAction<number>) {
      state.balance += action.payload;
    },
    withdraw(state, action: PayloadAction<number>) {
      if (state.balance < action.payload) {
        console.error("Insufficient funds for withdrawal.");
        return;
      }
      state.balance -= action.payload;
    },
    requestLoan(
      state,
      action: PayloadAction<{ amount: number; purpose: string }>
    ) {
      if (state.loan > 0) {
        console.error("Loan already exists.");
        return;
      }
      state.loan = action.payload.amount;
      state.loanPurpose = action.payload.purpose;
      state.balance += action.payload.amount;
    },
    payLoan(state) {
      if (state.balance < state.loan) {
        console.error("Insufficient funds to pay the loan.");
        return;
      }
      state.loan = 0;
      state.loanPurpose = "";
      state.balance -= state.loan;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(convertCurrency.fulfilled, (state, action) => {
      // Al recibir la cantidad convertida, hacemos el depósito
      state.balance += action.payload;
    });
  },
});

export const { deposit, withdraw, requestLoan, payLoan, setLoading } =
  accountSlice.actions;

export const accountReducer = accountSlice.reducer;

// Selector de estado
export const selectAccount = (state: RootState) => state.account;
