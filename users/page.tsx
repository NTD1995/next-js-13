import UserList from './UserList';
import { Suspense } from 'react';

type User = {
  id: string;
  name: string;
  email: string;
};

const Page = async () => {
 
  return (
    <div className="m-4">
      <h1 className="text-lg font-bold">ユーザ一覧</h1>
      <Suspense fallback={<p>Loading...</p>}>
        {/* @ts-expect-error Async Server Component */}
        <UserList />
      </Suspense>
    </div>
  );
};


export default Page;