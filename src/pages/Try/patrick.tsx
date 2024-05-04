import * as React from "react"
import Image from "next/image"
import p1 from '../../../public/picture/patrick/p1.jpg';
import p2 from '../../../public/picture/patrick/p2.jpeg';
import p3 from '../../../public/picture/patrick/p3.jpeg';
import p4 from '../../../public/picture/patrick/p4.jpeg';
import p5 from '../../../public/picture/patrick/p5.jpg';
import p6 from '../../../public/picture/patrick/p6.jpg';

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

export interface Artwork {
  Src: string
  text: string
}

export const works: Artwork[] = [
  {
    Src:'/picture/patrick/p1.jpg',
    text:'我都沒有睡覺'
  },
  {
    Src:'/picture/patrick/p2.jpeg',
    text:'我好愛你'
  },
  {
    Src:'/picture/patrick/p3.jpeg',
    text:'我需要錢'
  },
  {
    Src:'/picture/patrick/p4.jpeg',
    text:'我沒有念書'
  },
  {
    Src:'/picture/patrick/p5.jpg',
    text:'你不優拉'
  },
  {
    Src:'/picture/patrick/p6.jpg',
    text:'你叫誰尖頭'
  },
]

export default function Home(){ //  absolute opacity-0 group-hover:opacity-100 transition-opacity group-hover:h-100
  return (
    <div className='group relative'>
                <h2 className="text-xl pl-2">
                  ⭐ 派大星
                </h2> 
                <div className="group-hover:h-auto h-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ScrollArea className="whitespace-nowrap rounded-md border">
                    <div className="flex w-max space-x-4 p-4">
                      {works.map((artwork) => (
                        <figure key={artwork.text} className="shrink-0">
                          <div className="overflow-hidden rounded-md ">
                            <Image
                              src={artwork.Src}
                              alt={`${artwork.text}`}
                              className="aspect-[4/3] object-cover"
                              width={300}
                              height={200}
                            />
                          </div>
                          <figcaption className="pt-2 text-xs text-muted-foreground">
                            {" "}
                            <span className="font-semibold text-foreground">
                              {artwork.text}
                            </span>
                          </figcaption>
                        </figure>
                      ))}
                    </div>
                    <ScrollBar orientation="horizontal" />
                  </ScrollArea>
                </div>
    </div>

    
  )
}
