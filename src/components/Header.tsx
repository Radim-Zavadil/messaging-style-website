"use client"

import { useEffect, useState } from "react"

export default function Header() {
  const [time, setTime] = useState("")

  useEffect(() => {
    const now = new Date()
    setTime(
      now.toLocaleDateString("en-US", {
        weekday: "short",
        day: "2-digit",
        month: "2-digit",
      }) +
      " " +
      now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      })
    )
  }, [])

  return (
    <div className="text-center px-6 pt-8 pb-6">
      <div className="mx-auto w-16 h-16 rounded-full bg-[#011AFA]">
      </div>

      <h1 className="mt-4 text-xl font-semibold tracking-wide">
        YOUR AGENCY NAME
      </h1>
      <p className="text-gray-500">Scale paid ads</p>

      <p className="mt-4 text-sm leading-relaxed">
        Static ad designs for 6 fig to 9 fig brands.
        <br />
        Making ads for →{" "}
        <span className="text-[#0095fa]">@brand1</span> ·{" "}
        <span className="text-[#0095fa]">@brand2</span>
      </p>

      <p className="mt-3 text-gray-400 text-sm">
        Strategy · Design · Copy
      </p>

      <div className="mt-6 flex items-center justify-center gap-4 text-xs text-gray-400">
        <span className="flex-1 h-px bg-gray-200" />
        <span>{time}</span>
        <span className="flex-1 h-px bg-gray-200" />
      </div>
    </div>
  )
}
