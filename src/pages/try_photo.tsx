import Image from "next/image";
import { Inter } from "next/font/google";
import Patrick from '@/pages/Try/patrick';
import Spong from '@/pages/Try/spongbob';
import Ph from '@/pages/Try/photo';
import { PartyPopper } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
        <nav className="border-b-2 h-12 border-inherit">
            這條不要理他
        </nav>
        <article className='bg-orange-50 pt-2'>
            <div className='text-2xl pl-2 font-bold'>
                📢 月份最佳照片
            </div>
            <div className='flex justify-center'>
                <Ph/>
            </div>
            <br/>
        </article>
        <article>
            <div className="border-y border-inherit">
                <Patrick/>
                <br/>
            </div>
            <div className="bg-orange-50 border-y border-inherit">
                <Spong/>
                <br/>
            </div>
        </article>
    </div>
  );
}

// <div  className="even:bg-orange-100">
// <h2 className="text-3xl ml-2">
//     海綿寶寶
// </h2>
// <Spong/>
// </div>