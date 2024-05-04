import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import Image from 'next/image'
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface Pic{
  Src: string;
  text: string;
}

export const pictures: Pic[] = [
  {
    Src:'/picture/patrick/p1.jpg',
    text:'五月份最佳照片'
  },
  {
    Src:'/picture/patrick/p2.jpeg',
    text:'六月份最佳照片'
  },
  {
    Src:'/picture/patrick/p3.jpeg',
    text:'七月份最佳照片'
  },
  {
    Src:'/picture/patrick/p4.jpeg',
    text:'八月份最佳照片'
  },
  {
    Src:'/picture/patrick/p5.jpg',
    text:'九月份最佳照片'
  },
  {
    Src:'/picture/patrick/p6.jpg',
    text:'十月份最佳照片'
  },
]
//rounded-md flex overflow-hidden object-cover aspect-[17/13] items-center justify-center p-6
export default function Home() {
    return (
      <div>
        <Carousel className="w-full max-w-sm" plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}>
        <CarouselContent>
          {pictures.map((picture, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="rounded-md flex overflow-hidden object-cover aspect-[17/13] items-center justify-center p-6">
                    <Image 
                      className="text-4xl rounded-md" 
                      src={picture.Src}
                      alt={picture.text}
                      width={300}
                      height={200}
                    />
                  </CardContent>
                </Card>
              </div>
              <figcaption className="pt-2 text-xl text-muted-foreground ">
                {" "}
                <span className="text-foreground justify-center flex">
                  {picture.text}
                </span>
              </figcaption>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      </div>
    );
  }
  