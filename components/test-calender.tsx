'use client';

import { Calendar } from "./ui/calendar";

import * as React from "react"

export default function TestCalender() {
    const [date, setDate] = React.useState<Date | undefined>(new Date())
 
    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
    )
}