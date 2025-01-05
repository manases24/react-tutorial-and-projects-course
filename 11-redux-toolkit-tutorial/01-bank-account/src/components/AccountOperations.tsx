import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import {
  convertCurrency,
  deposit,
  payLoan,
  requestLoan,
  withdraw,
} from "../redux/features/accounts/accountSlice";

export const AccountOperations = () => {
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawalAmount, setWithdrawalAmount] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");
  const [currency, setCurrency] = useState("USD");

  const dispatch: AppDispatch = useDispatch();
  const {
    balance,
    loan: currentLoan,
    loanPurpose: currentLoanPurpose,
    isLoading,
  } = useSelector((store: RootState) => store.account);

  function handleDeposit() {
    console.log(`Deposited ${depositAmount} in ${currency}`);

    // Validar que depositAmount es un número
    const amount = +depositAmount;
    if (!depositAmount || isNaN(amount)) return; // Evitar que se pase un valor no numérico

    // Si no es USD, se realiza la conversión
    if (currency !== "USD") {
      dispatch(convertCurrency({ amount, currency }));
    } else {
      dispatch(deposit({ amount, currency })); // Si es USD, directamente se deposita
    }

    setDepositAmount("");
    setCurrency("USD");
  }

  function handleWithdrawal() {
    console.log(`Withdrew ${withdrawalAmount}`);
    if (!withdrawalAmount || isNaN(+withdrawalAmount)) return;
    dispatch(withdraw(+withdrawalAmount));
    setWithdrawalAmount("");
  }

  function handleRequestLoan() {
    console.log(`Requested loan of ${loanAmount} for ${loanPurpose}`);
    if (!loanAmount || !loanPurpose) return; // Validar que ambos campos estén completos
    dispatch(requestLoan({ amount: +loanAmount, purpose: loanPurpose }));
    setLoanAmount("");
    setLoanPurpose("");
  }

  function handlePayLoan() {
    console.log("Paid loan");
    dispatch(payLoan());
  }

  return (
    <div>
      <h2>Your account operations</h2>
      <div className="inputs">
        <div>
          <label>Deposit</label>
          <input
            type="number"
            value={depositAmount}
            onChange={(e) => setDepositAmount(e.target.value)}
          />
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="USD">US Dollar</option>
            <option value="EUR">Euro</option>
            <option value="GBP">British Pound</option>
          </select>

          <button onClick={handleDeposit} disabled={isLoading}>
            {isLoading ? "Converting... 🤠" : `Deposit ${depositAmount}`}
          </button>
        </div>

        <div>
          <label>Withdraw</label>
          <input
            type="number"
            value={withdrawalAmount}
            onChange={(e) => setWithdrawalAmount(e.target.value)}
          />
          <button onClick={handleWithdrawal}>
            Withdraw {withdrawalAmount}
          </button>
        </div>

        <div>
          <label>Request loan</label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            placeholder="Loan amount"
          />
          <input
            value={loanPurpose}
            onChange={(e) => setLoanPurpose(e.target.value)}
            placeholder="Loan purpose"
          />
          <button onClick={handleRequestLoan}>Request loan</button>
        </div>

        {currentLoan > 0 && (
          <div>
            <span>
              Pay back ${currentLoan} ({currentLoanPurpose})
            </span>
            <button onClick={handlePayLoan}>Pay loan</button>
          </div>
        )}
      </div>
    </div>
  );
};
