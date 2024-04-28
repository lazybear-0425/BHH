//https://ui.shadcn.com/docs/components/table
import * as React from "react"
import { useRef } from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface announce{
  title: string;
  description: string;
  href: string;
  author: string;
}

const invoices : announce[] = [
  {
    title: '如何使用GitHub',
    description: '使用Github指令',
    href: 'https://hackmd.io/@LazyBear0425/git1',
    author: '熊'
  },
]

export default function Home() {
  return (
    <article style={{marginLeft: '20px',marginRight:'20px',marginTop:'30px'}}>
      <div>
        <h1 style={{fontSize:'25px'}}>
          HackMD連結
        </h1>
        <br />
      </div>
      <Table>
        <TableCaption>各位報告的HackMD連結會在這邊</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[300px]">Title</TableHead>
            <TableHead>Author</TableHead>
            <TableHead className="text-center">Description</TableHead>
            <TableHead className="w-[100px]">Link</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.title}>
              <TableCell className="font-medium">{invoice.title}</TableCell>
              <TableCell>{invoice.author}</TableCell>
              <TableCell className="text-center">{invoice.description}</TableCell>    
              <TableCell>
                <a href={invoice.href}>
                    LINK
                </a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </article>
  )
}
