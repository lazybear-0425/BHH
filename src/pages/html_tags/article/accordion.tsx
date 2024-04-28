//https://ui.shadcn.com/docs/components/accordion

import * as React from "react"
import { Link } from 'react-router-dom';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  

  interface announce{
    title: string;
    description: string;
  }
  

  export default function Home() {
    return (
        <article style={{width:'70%',marginLeft: '20px'}}>
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                <AccordionTrigger>分享一些好用工具</AccordionTrigger>
                <AccordionContent>
                    <Link to='https://pastebin.com/'>分享程式碼</Link>
                </AccordionContent>
                </AccordionItem>
            </Accordion>
        </article>
    )
  }
  