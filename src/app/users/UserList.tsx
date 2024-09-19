// import Link from "next/link";
// import Counter from "./Counter";
// import UserList from "./users/UserList";
import React, { useState } from "react";
import Link from "next/link";

type User = {
  id: string;
  name: string;
  email: string;
};

const UserList = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/user");
  if (!response.ok) throw new Error("Failed to fetch data");
  const users: User[] = await response.json();
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

const Counter = ({ children }: { children: React.ReactNode }) => {
  const [count, setCount] = useState<number>(0);
  const increment = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <>
      <div>Count: {count}</div>
      <button
        onClick={increment}
        className="px-2 py-1 rounded-lg bg-blue-600 text-white"
      >
        Increment
      </button>
      {children}
    </>
  );
};

export default UserList;
