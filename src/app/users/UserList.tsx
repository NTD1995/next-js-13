import React, { useState } from "react";
import Link from "next/link";
import { NextResponse } from "next/server";
import { headers, cookies } from "next/headers";

type User = {
  id: string;
  name: string;
  email: string;
};

const UserList = async () => {
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch("http://localhost:3000/api");
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

export async function GET() {
  const headersList = headers();
  const cookieStore = cookies();

  console.log("headersList", headersList);
  console.log("cookieStore", cookieStore);

  const response = await fetch("http://localhost:3000/api", {
    // cache: 'no-store',
    next: { revalidate: 5 },
  });
  const data = await response.json();
  return NextResponse.json(data);
}

export default UserList;
