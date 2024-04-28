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


interface Problem{
  id: number;
  title: string;
  OJ: string;
  href: string;
}

const problem : Problem[] = [
  { id: 10071, title: 'Back to High School Physics', OJ:'UVa', href:'https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=24&page=show_problem&problem=1012' },
]

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
