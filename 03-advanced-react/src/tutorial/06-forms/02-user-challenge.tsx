import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { data } from "../../api";

export const UserChallenge = () => {
  const [name, setName] = useState("");
  const [users, setUsers] = useState(data);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!users) return;

    const newUser = { id: uuidv4(), name };
    const updatedUser = [...users, newUser];
    setUsers(updatedUser);
    setName("");
  };

  const removeUser = (id: string) => {
    const updatedUsers = users.filter((u) => u.id !== id);
    setUsers(updatedUsers);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            className="form-input"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>

      <h2>users</h2>

      {users.map((user) => {
        return (
          <div key={user.id}>
            <h4>{user.name}</h4>
            <button onClick={() => removeUser(user.id)} className="btn">
              remove
            </button>
          </div>
        );
      })}
    </div>
  );
};
