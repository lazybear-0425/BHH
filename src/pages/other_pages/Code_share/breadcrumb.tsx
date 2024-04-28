import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { ChevronRight, MoreHorizontal } from "lucide-react"
 
import { cn } from "@/lib/utils"
import { Slash } from "lucide-react"

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"

  export default function Home() {
    return (
        <div>
            <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                <BreadcrumbLink href="/" color="White">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                <Slash />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                <BreadcrumbLink href="/other_pages">Code_Share</BreadcrumbLink>
                </BreadcrumbItem>
            </BreadcrumbList>
            </Breadcrumb>
        </div>
    );
  }