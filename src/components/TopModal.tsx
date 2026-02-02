"use client"

import { useEffect, useState } from "react"

export default function TopModal() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 220)
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-transform duration-300
        ${visible ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <div className="bg-white/80 backdrop-blur-md px-4 py-8 border-b border-white/20 flex flex-col items-center justify-center gap-1">
        <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-[10px]">
          LOGO
        </div>
        <span className="text-md font-semibold">YOUR AGENCY NAME</span>
      </div>
    </div>
  )
}
