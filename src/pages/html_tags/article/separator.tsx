import { Separator } from "@/components/ui/separator"
import * as React from "react"
import Tool from '@/pages/html_tags/article/separator_other_pages/tools';
import Future from '@/pages/html_tags/article/separator_other_pages/future';

export default function Home() {
  return (
    <article style={{width:'70%',marginLeft: '20px'}}>
      <p style={{fontSize:'30px'}}>
        小組核心事項
      </p>
      <br/>
      <Tool />
      <br/>
      <Future />
      <br/>
    </article>
  )
}
