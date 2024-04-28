import Image from "next/image";
import { Inter } from "next/font/google";
import type { Metadata } from 'next'
import Nav from "./html_tags/nav";
//import Section from "./html_tags/section";
import Aside from "./html_tags/aside";
import Activity from "./html_tags/article/activity";
import MyTable from '@/pages/html_tags/article/table';
import Accordion from '@/pages/html_tags/article/accordion';
import Separator from '@/pages/html_tags/article/separator';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: '熊熊快樂小組',
  description: 'ACM group, named 熊熊快樂小組',
  icons: {
    icon: '/favicon.png',
  },
};

export default function Home() {
  return (
    <div>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <Nav />
      <section>
        <Aside />
      </section>
      <Activity />
      <Separator />
      <MyTable />
    </div>
  );
}
