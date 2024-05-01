import { Separator } from "@/components/ui/separator"
import * as React from "react"

export default function Home() {
  return (
      <div>
        <div className="space-y-1">
          <h4 className="text-sm font-medium leading-none" style={{fontSize:'17px'}}>分享好用工具</h4>
          <p className="text-sm text-muted-foreground">
            一些方便你進行小組活動的工具
          </p>
        </div>
        <Separator className="my-4" />
        <div className="flex h-5 items-center space-x-4 text-sm">
          <div><a href="https://pastebin.com/">Pastebin</a></div>
          <Separator orientation="vertical" />
          <div><a href="https://github.com/">GitHub</a></div>
          <Separator orientation="vertical" />
          <div><a href="https://vjudge.net/">VJudge</a></div>
          <Separator orientation="vertical" />
          <div><a href="https://forms.gle/iyRUPXjdrM7vWgAP8">程式碼分享-Google表單</a></div>
        </div>
      </div>
  )
}
