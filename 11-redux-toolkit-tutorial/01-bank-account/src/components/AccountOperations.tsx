import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import {
  deposit,
  payLoan,
  requestLoan,
  withdraw,
} from "../redux/features/accounts/accountSlice";

type CurrencyType = "USD" | "EUR" | "GBP";

export const AccountOperations = () => {
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawalAmount, setWithdrawalAmount] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");
  const [currency, setCurrency] = useState<CurrencyType>("USD");

  const dispatch: AppDispatch = useDispatch();
  const {
    balance,
    loan: currentLoan,
    loanPurpose: currentLoanPurpose,
  } = useSelector((store: RootState) => store.account);

  function handleDeposit() {
    console.log(`Deposited ${depositAmount} in ${currency}`);
    if (!depositAmount || isNaN(+depositAmount)) return;
    dispatch(deposit(+depositAmount));
    setDepositAmount("");
  }

  function handleWithdrawal() {
    console.log(`Withdrew ${withdrawalAmount}`);
    if (!withdrawalAmount || isNaN(+withdrawalAmount)) return;
    dispatch(withdraw(+withdrawalAmount));
    setWithdrawalAmount("");
  }

  function handleRequestLoan() {
    console.log(`Requested loan of ${loanAmount} for ${loanPurpose}`);
    if (!loanAmount || !loanPurpose) return;
    dispatch(requestLoan(+loanAmount, loanPurpose));
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
            onChange={(e) => setCurrency(e.target.value as CurrencyType)}
          >
            <option value="USD">US Dollar</option>
            <option value="EUR">Euro</option>
            <option value="GBP">British Pound</option>
          </select>

          <button onClick={handleDeposit}>Deposit {depositAmount}</button>
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
            <button onClick={handlePayLoan}> Pay loan</button>
          </div>
        )}
      </div>
    </div>
  );
};
