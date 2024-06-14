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
    date: '2024/04/30',
    title: '五月份ITSA開始報名',
    description: '報名時間 : 2024/04/29 12:00至202405/13 23:59止'
  },
  {
    date: '2024/06/04',
    title: '六月份ITSA開始報名',
    description: '報名時間 : 2024/06/03 12:00至2024/06/17 23:59止'
  },
  {
    date: '2024/06/15',
    title: '小組活動-工作分配',
    description: '討論暑期活動、工作分配、Python基礎教學(暫定)'
  },
  {
    date: '2024/06/??',
    title: '預期小組活動-Python基礎教學',
    description: '教datatype、if-else、loop等'
  },
]

export default function Home() {
  return (
    <article style={{width:'70%',marginLeft: '20px'}}>
      <div>
        <h1 style={{fontSize:'30px'}}>
          📢事情宣布
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
