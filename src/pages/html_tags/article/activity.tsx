import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <article style={{width:'70%',marginLeft: '20px',marginTop:'20px'}}>
        <div>
            <Image src="/run.png" alt="Your Avatar" width={200} height={200} /><br />
        </div>
    </article>
  );
}
