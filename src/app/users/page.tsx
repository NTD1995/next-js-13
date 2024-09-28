import Link from "next/link";
import Counter from "./counter";
import UserList from "./UserList";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="m-4">
      <Link href="/about" className="underline">
        About
      </Link>
      <h1 className="text-2xl">Home</h1>
      <Counter>
        <h2 className="font-bold text-lg mt-4">ユーザ一覧</h2>
        {/* @ts-expect-error Async Server Component */}
        <UserList />
      </Counter>
    </div>
  );
}

type User = {
  id: string;
  name: string;
  email: string;
};

const Page = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await response.json();
  console.log(users);
  return (
    <div className="m-4">
      <h1 className="text-lg font-bold">ユーザ一覧</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <UserList />
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </Suspense>
    </div>
  );
};

export default Page;
