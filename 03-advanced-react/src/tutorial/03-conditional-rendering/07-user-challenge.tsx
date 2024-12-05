import { useState } from "react";

interface Props {
  name: string;
}

export const UserChallenge = () => {
  const [user, setUser] = useState<Props | null>(null);

  const login = () => {
    setUser({ name: "vegan food truck" });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <div>
      {user ? (
        <div>
          <h4>hello there, {user.name}</h4>
          <button className="btn" onClick={logout}>
            logout
          </button>
        </div>
      ) : (
        <div>
          <h4>Please Login</h4>
          <button className="btn" onClick={login}>
            login
          </button>
        </div>
      )}
    </div>
  );
};
