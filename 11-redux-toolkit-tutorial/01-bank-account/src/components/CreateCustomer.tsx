import { useState } from "react";
import { useDispatch } from "react-redux";
import { createCustomer } from "../redux/features/customers/customerSlice-v1";
import { AppDispatch } from "../redux/store-v2";

export const CreateCustomer = () => {
  const [fullName, setFullName] = useState("");
  const [nationalId, setNationalId] = useState("");

  const dispatch: AppDispatch = useDispatch()

  function handleClick() {
    if (!fullName || !nationalId) return

    dispatch(createCustomer(fullName, nationalId))
  }

  return (
    <div>
      <h2>Create new customer</h2>
      <div className="inputs">
        <div>
          <label>Customer full name</label>
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div>
          <label>National ID</label>
          <input
            value={nationalId}
            onChange={(e) => setNationalId(e.target.value)}
          />
        </div>
        <button onClick={handleClick}>Create new customer</button>
      </div>
    </div>
  );
};
