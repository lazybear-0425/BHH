import Image from "next/image";
import { Inter } from "next/font/google";
import { Calendar } from "@/components/ui/calendar"
import React, { useState, useEffect } from 'react';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    const [date, setDate] = React.useState<Date | undefined>(new Date())
   
    return (
        <aside style={{float:'right',marginRight:'30px',marginTop:'30px'}}>
            <div>
            <h2>日歷</h2>         
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
            />
            </div>
        </aside>
    )
}
