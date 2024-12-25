import { AccountOperations } from "./components/AccountOperations";
import { BalanceDisplay } from "./components/BalanceDisplay";
import { CreateCustomer } from "./components/CreateCustomer";
import { Customer } from "./components/Customer";

function App() {
  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      <CreateCustomer />
      <Customer />
      <AccountOperations />
      <BalanceDisplay />
    </div>
  );
}

export default App;
