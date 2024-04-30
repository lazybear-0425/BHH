import { Separator } from "@/components/ui/separator"
import * as React from "react"

export default function Home() {
  return (
      <div>
        <div className="space-y-1">
          <h4 className="text-sm font-medium leading-none" style={{fontSize:'17px'}}>未來小組規劃</h4>
          <p className="text-sm text-muted-foreground">
            一些規劃方向...
          </p>
        </div>
        <Separator className="my-4" />
        <div className="flex h-5 items-center space-x-4 text-sm">
          <div>讀 Introduction to Algorithm</div>
          <Separator orientation="vertical" />
          <div>提醒有CPE、ITSA等檢定</div>
          <Separator orientation="vertical" />
          <div>每周一題程式題目</div>
          <Separator orientation="vertical" />
          <div>學習Pytorch</div>
        </div>
      </div>
  )
}
