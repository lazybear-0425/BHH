import Image from "next/image";
import Link from 'next/link';
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="container mx-auto mt-10">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <Link href="/">
          <div className="flex h-44 w-full items-center rounded-3xl border-4 border-black bg-white p-5 shadow-[4px_4px_0_0_#000] hover:bg-yellow-200">
            <div>
              <p className="text-2xl font-bold">My Title</p>
              <p className="mt-4 text-lg font-medium leading-relaxed">Description</p>
            </div>
          </div>
        </Link>
        <Link href="/">
          <div className="flex h-44 w-full items-center rounded-3xl border-4 border-black bg-white p-5 shadow-[4px_4px_0_0_#000] hover:bg-yellow-200">
            <div>
              <p className="text-2xl font-bold">My Title</p>
              <p className="mt-4 text-lg font-medium leading-relaxed">Description</p>
            </div>
          </div>
        </Link>
        <Link href="/">
          <div className="flex h-44 w-full items-center rounded-3xl border-4 border-black bg-white p-5 shadow-[4px_4px_0_0_#000] hover:bg-yellow-200">
            <div>
              <p className="text-2xl font-bold">My Title</p>
              <p className="mt-4 text-lg font-medium leading-relaxed">Description</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
