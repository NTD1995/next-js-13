type User = {
  id: string;
  name: string;
  email: string;
};

import { Suspense } from 'react';
import UserList from './UserList';
import OtherUserList from './OtherUserList';

const Page = async () => {
  return (
    <div className="m-4">
      <h1 className="text-lg font-bold">ユーザ一覧</h1>
      <Suspense fallback={<p className="text-red-700">Loading UserList...</p>}>
        {/* @ts-expect-error Async Server Component */}
        <UserList />
      </Suspense>
      <Suspense fallback={<p>Loading OtherUserList...</p>}>
        {/* @ts-expect-error Async Server Component */}
        <OtherUserList />
      </Suspense>
    </div>
  );
};

const OtherUserList = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: User[] = await response.json();
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default OtherUserList;