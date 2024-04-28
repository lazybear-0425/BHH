//https://ui.shadcn.com/docs/components/table
import * as React from "react"
import { useRef } from 'react';
import { problem } from '@/pages/other_pages/Code_share/data'

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

export default function Home() {
  return (
    <article style={{marginLeft: '20px',marginRight:'20px',marginTop:'30px'}}>
      <div>
        <h1 style={{fontSize:'25px'}}>
          程式題目連結
        </h1>
        <br />
      </div>
      <Table>
        <TableCaption>已寫過的程式會在這邊</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[300px]">Title</TableHead>
            <TableHead>OJ</TableHead>
            <TableHead>ID</TableHead>
            <TableHead className="w-[100px]">Link</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {problem.map((invoice) => (
            <TableRow key={invoice.title}>
              <TableCell className="font-medium">{invoice.title}</TableCell>
              <TableCell>{invoice.OJ}</TableCell>   
              <TableCell>{invoice.id}</TableCell>   
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
