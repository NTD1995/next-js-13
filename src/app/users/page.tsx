import Link from "next/link";
import Counter from "../counter";
import UserList from "./UserList";

export default function Home() {
  return (
    <div className="m-4">
      <Link href="/about" className="underline" prefetch={false}>
        About
      </Link>
      <h1 className="text-2xl">Home</h1>
      <Counter>
        <h2 className="font-bold text-lg mt-4">ユーザ一覧</h2>
        <UserList />
      </Counter>
    </div>
  );
}

const Page = async () => {
  const response = await fetch("http://localhost:3000/api", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "John",
      email: "john@example.com",
    }),
  });

  const data = await response.json();

  console.log(data);

  return (
    <div className="m-4">
      <h1 className="text-lg font-bold">ユーザ一覧</h1>
      {/* @ts-expect-error Async Server Component */}
      <UserList />
    </div>
  );
};
