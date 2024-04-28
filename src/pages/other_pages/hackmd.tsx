import Image from "next/image";
import { Inter } from "next/font/google";
import Nav from "@/pages/other_pages/Hackmd/nav";
import Table from '@/pages/other_pages/Hackmd/table'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Nav />
      <Table />
    </div>
  );
}
