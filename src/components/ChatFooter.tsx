"use client"

import { ArrowUp } from "lucide-react"

export default function ChatFooter() {
  return (
    <div className="px-4 py-8 space-y-6 flex flex-col items-center">
      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full text-gray-400 hover:text-gray-600 transition-colors"
      >
        <ArrowUp size={20} strokeWidth={2.5} />
      </button>

      <div className="space-y-3 text-center">
        {/* Copyright Text */}
        <p className="text-[#888] text-base">
          © 2026 Messenger with <a href="#">@jpegsmalfia</a>
        </p>

        {/* Links */}
        <div className="flex items-center justify-center gap-2 text-[#333] text-base">
          <a
            href="/form"
            className="transition-opacity hover:opacity-50"
          >
            Work With Us
          </a>
          <span className="text-gray-300">·</span>
          <a
            href="#"
            className="transition-opacity hover:opacity-50"
          >
            Refer a brand
          </a>
        </div>

        {/* Referral Text */}
        <a href="#" className="transition-opacity hover:opacity-50 text-base">
          Earn 20% per referral by introducing
          <br />
          companies to JPEGS MAFIA.
        </a>
      </div>
    </div>
  )
}
