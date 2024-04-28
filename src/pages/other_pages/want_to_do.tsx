import Image from "next/image";
import { Inter } from "next/font/google";
import Nav from "@/pages/other_pages/Want_to_do/nav";
import Table from "@/pages/other_pages/Want_to_do/table";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div >
      <Nav />
      <Table />
    </div>
  );
}
