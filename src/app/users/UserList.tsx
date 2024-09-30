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

export async function GET() {
  const headersList = headers();
  const cookieStore = cookies();

  console.log("headersList", headersList);
  console.log("cookieStore", cookieStore);

  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return NextResponse.json(data);
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get("name");
  console.log(name);
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return NextResponse.json(data);
}

export default UserList;
