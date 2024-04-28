import Image from "next/image";
import { Inter } from "next/font/google";
import type { Metadata } from 'next'
import Head from 'next/head'; // 导入 Head 组件
import Nav from "./html_tags/nav";
import Heads from "./html_tags/heads";
//import Section from "./html_tags/section";
import Aside from "./html_tags/aside";
import Activity from "./html_tags/article/activity";
import MyTable from '@/pages/html_tags/article/table';
import Accordion from '@/pages/html_tags/article/accordion';
import Separator from '@/pages/html_tags/article/separator';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Heads />
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
