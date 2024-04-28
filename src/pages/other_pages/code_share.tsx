import Image from "next/image";
import { Inter } from "next/font/google";
import Nav from "@/pages/other_pages/Code_share/nav";
import Combo from "@/pages/other_pages/Code_share/combobox";
import Table from "@/pages/other_pages/Code_share/table";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Nav />
      <Combo />
      <Table />
    </div>
  );
}
