import Image from "next/image";
import { Inter } from "next/font/google";
import type { Metadata } from 'next'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <header className="py-4 bg-gray-800 text-white">
    <div className="px-6 py-2 flex flex-row justify-between container mx-auto">
        <h3>hello</h3>
        <div >
            <a href='' className="px-8 py-2 text-medium bg-blue-600 text-white border border-black rounded hover:bg-transparent hover:text-black">Button 1</a>        
            <a href='' className="px-8 py-2 text-medium bg-blue-600 text-white border border-black rounded hover:bg-transparent hover:text-black">Button 2</a>
            <a href='' className="px-8 py-2 text-medium bg-blue-600 text-white border border-black rounded hover:bg-transparent hover:text-black">Button 3</a>
        </div>
    </div>
    </header>
  );
}
