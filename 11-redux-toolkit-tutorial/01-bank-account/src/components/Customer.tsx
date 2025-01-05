import { useSelector } from "react-redux";
import { RootState } from "../redux/store-v2";

export const Customer = () => {
  const customer = useSelector((store: RootState) => store.customer);
  console.log(customer)
  return <h2>👋 Welcome, {customer.fullName}</h2>;
};
