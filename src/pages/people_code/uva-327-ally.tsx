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

const proplem : string = 'https://onlinejudge.org/index.php?option=onlinejudge&Itemid=8&page=show_problem&problem=263';
const best_sol : string = 'https://github.com/morris821028/UVa/blob/master/volume003/327%20-%20Evaluating%20Simple%20C%20Expressions.cpp';
const code : string = 'https://pastebin.com/dGzWbRpv';

export default function Home() {
  return (
    <div >
      <Nav />
           
      <article style={{width:'70%',marginLeft: '20px',marginTop:'30px'}}>
          <div style={{fontSize:'35px'}}>
                  UVa - 327 - Evaluating Simple C Expressions<br />
          </div>
          <div>
              <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                  <AccordionTrigger>💻一些資訊</AccordionTrigger>
                  <AccordionContent>
                  <ul>
                      <li>作者 : 匿名</li>
                      <li>題目連結 : <a target="_blank" href={proplem} className="text-sky-700">LINK</a></li>
                  </ul>
                  </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                  <AccordionTrigger>🤔解題思路</AccordionTrigger>
                  <AccordionContent>
                    先讀進來，然後看是不是字母，是的話就判斷她的前面2個和後面2個是不是都是符號運算是的話就看是在前面還是后面。
                    再把++ 或 -- 的位置變成 0 ，之後遇到 0 就跳過執行真的 倆數相加 or 相減。
                  </AccordionContent>
              </AccordionItem>


              <AccordionItem value="item-3">
                  <AccordionTrigger>💭心得</AccordionTrigger>
                  <AccordionContent>
                  需要考慮到很多問題，比如是先 ++ 還是 后 ++ 之類的 ，反正就是一直debug就行了。建議不要一個一個讀，這樣會很麻煩而且要一直記錄index 的字母 ， 我是沒做成功。
                  直接判斷字母然後在看字母的運算符號（++ / --）是在前面還是後面。 &lt;- 這個方法是上網看的，然後就恍然大悟 ，變成現在亂七八糟的代碼了哈哈。
                  介意看別人的，我的很亂，只能說還好沒時間限制，要不然肯定超時。
                  </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                  <AccordionTrigger>📚更佳解</AccordionTrigger>
                  <AccordionContent>
                    啊有呀，這個：
                    <a href={best_sol} target="_blank">LINK</a>
                  </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                  <AccordionTrigger>📝程式碼分享</AccordionTrigger>
                  <AccordionContent>
                    <a href={code} target="_blank" className="text-sky-700">LINK</a>
                  </AccordionContent>
              </AccordionItem>
              </Accordion>
          </div>
      </article>
    </div>
  );
}
