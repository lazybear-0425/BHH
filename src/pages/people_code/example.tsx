import Image from "next/image";
import { Inter } from "next/font/google";
import Nav from "@/pages/people_code/People_code/nav";
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div >
      <Nav />
      
      
      <article style={{width:'70%',marginLeft: '20px',marginTop:'30px'}}>
          <div style={{fontSize:'35px'}}>
                  UVa - 1 - I want sleep<br />
          </div>
          <div>
              <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                  <AccordionTrigger>💻一些資訊</AccordionTrigger>
                  <AccordionContent>
                  <ul>
                      <li>作者 : 匿名</li>
                  </ul>
                  </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                  <AccordionTrigger>🤔解題思路</AccordionTrigger>
                  <AccordionContent>
                      我想睡覺
                  </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                  <AccordionTrigger>📚更佳解</AccordionTrigger>
                  <AccordionContent>
                      哈哈
                  </AccordionContent>
              </AccordionItem>
              </Accordion>
          </div>
      </article>
    </div>
  );
}
