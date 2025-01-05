import { useSelector } from "react-redux";
import { AccountOperations } from "./components/AccountOperations";
import { BalanceDisplay } from "./components/BalanceDisplay";
import { CreateCustomer } from "./components/CreateCustomer";
import { Customer } from "./components/Customer";
import { RootState } from "./redux/store";

function App() {
  const customer = useSelector((state: RootState) => state.customer);

  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      {customer.fullName === "" ? (
        <CreateCustomer />
      ) : (
        <>
          <Customer />
          <AccountOperations />
          <BalanceDisplay />
        </>
      )}
    </div>
  );
}

export default App;
