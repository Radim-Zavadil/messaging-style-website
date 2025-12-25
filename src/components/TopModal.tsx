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
      <div className="bg-white shadow-md px-4 py-3 text-center text-sm">
        YOUR AGENCY NAME — Scale paid ads
      </div>
    </div>
  )
}
