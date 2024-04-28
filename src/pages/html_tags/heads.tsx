import Image from "next/image";
import { Inter } from "next/font/google";
import type { Metadata } from 'next'
import Head from 'next/head'; // 导入 Head 组件

export default function Home() {
  return (
    <div>
      <Head>
        <title>熊熊快樂小組</title> {/* 设置页面标题 */}
        <meta name="description" content='ACM group, named 熊熊快樂小組' /> {/* 设置页面描述 */}
        <link rel="icon" href='/favicon.ico' sizes="any" /> {/* 设置页面图标 */}
      </Head>
    </div>
  );
}
