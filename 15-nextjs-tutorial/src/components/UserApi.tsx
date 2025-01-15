"use client";

import { useEffect, useState } from "react";

interface User {
  id: number;
  firstName: string;
  lastName: string;
}

export const UserApi = () => {
  // Estado para almacenar los datos de los usuarios
  const [users, setUsers] = useState<User[]>([]);

  const fetchUser = async () => {
    try {
      const res = await fetch("/api/users");
      const data = await res.json();
      setUsers(data.users);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      {users.map((user) => (
        <div key={user.id}>
          <h2>
            {user.firstName} {user.lastName}
          </h2>
        </div>
      ))}
    </>
  );
};
