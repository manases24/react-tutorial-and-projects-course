import { useState } from "react";

type CurrencyType = "USD" | "EUR" | "GBP";

export const AccountOperations = () => {
  const [depositAmount, setDepositAmount] = useState<number>(0);
  const [withdrawalAmount, setWithdrawalAmount] = useState<number>(0);
  const [loanAmount, setLoanAmount] = useState<number>(0);
  const [loanPurpose, setLoanPurpose] = useState<string>(""); 
  const [currency, setCurrency] = useState<CurrencyType>("USD");

  function handleDeposit() {
    console.log(`Deposited ${depositAmount} in ${currency}`);
  }

  function handleWithdrawal() {
    console.log(`Withdrew ${withdrawalAmount}`);
  }

  function handleRequestLoan() {
    console.log(`Requested loan of ${loanAmount} for ${loanPurpose}`);
  }

  function handlePayLoan() {
    console.log("Paid loan");
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
            onChange={(e) => setDepositAmount(Number(e.target.value))}
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
            onChange={(e) => setWithdrawalAmount(+(e.target.value))}
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
            onChange={(e) => setLoanAmount(+(e.target.value))} 
            placeholder="Loan amount"
          />
          <input
            value={loanPurpose}
            onChange={(e) => setLoanPurpose(e.target.value)}
            placeholder="Loan purpose"
          />
          <button onClick={handleRequestLoan}>Request loan</button>
        </div>

        <div>
          <span>Pay back $X</span>
          <button onClick={handlePayLoan}>Pay loan</button>
        </div>
      </div>
    </div>
  );
};
