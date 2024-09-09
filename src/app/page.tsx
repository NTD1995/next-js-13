import Link from 'next/link';
import Counter from './Counter';

export default function Home() {
  return (
    <div className="m-4">
   <Link href="/about" className="underline" prefetch={false}>
        About
      </Link>
      <h1 className="text-2xl">Home</h1>
    </div>
  );
}