import * as React from "react"
import Image from "next/image"

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

export interface Artwork {
  Src: string
  text: string
}

export const works: Artwork[] = [
  {
    Src:'/picture/spongbob/s1.jpg',
    text:'你好可憐'
  },
  {
    Src:'/picture/spongbob/s2.jpg',
    text:'神奇海螺'
  },
  {
    Src:'/picture/spongbob/s3.jpeg',
    text:'沒意義的話'
  },
  {
    Src:'/picture/spongbob/s4.jpg',
    text:'你怎麼這麼天真'
  },
  {
    Src:'/picture/spongbob/s5.jpg',
    text:'?'
  },
]

export default function Home(){
  return (
    <div className='group relative'>
                <h2 className="text-xl pl-2">
                  🟨 海綿寶寶
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
