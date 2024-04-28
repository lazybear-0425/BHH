//https://ui.shadcn.com/docs/components/table
import * as React from "react"
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
  date: string;
  title: string;
  description: string;
}

const invoices : announce[] = [
  {
    date: '2024/04/29',
    title: '熊熊快樂小組創立',
    description: '快逃'
  },
  {
    date: '2024/04/29',
    title: '關於未來活動',
    description: '放假前開會討論活動規劃，目前到暑假前暫無活動'
  },
  {
    date: '2024/04/29',
    title: '加入LINE群組',
    description: '請在加入時說明你是誰，方便身分查證'
  },
]

export default function Home() {
  return (
    <article style={{width:'70%',marginLeft: '20px'}}>
      <div>
        <h1 style={{fontSize:'25px'}}>
          事情宣布
        </h1>
      </div>
      <Table>
        <TableCaption>事情會宣布在這邊</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Date</TableHead>
            <TableHead>Title</TableHead>
            <TableHead className="text-right">Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.date}>
              <TableCell className="font-medium">{invoice.date}</TableCell>
              <TableCell>{invoice.title}</TableCell>
              <TableCell className="text-right">{invoice.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </article>
  )
}
