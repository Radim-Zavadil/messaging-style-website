"use client"

import Image from "next/image"
import { useState } from "react"
import { Calendar, RefreshCcw } from "lucide-react"

export default function MessageBubble({ message }: any) {
  const isUser = message.sender === "user"

  // FORM STATE (only used when message.type === "form")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [text, setText] = useState("")
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  async function submitForm() {
    if (!name || !email || !text) return

    setLoading(true)

    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          message: text,
        }),
      })

      setSubmitted(true)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={`flex gap-2 ${isUser ? "justify-end" : "justify-start"}`}>
      {!isUser && (
        <div className="w-8 h-8 rounded-full overflow-hidden mt-1 shrink-0">
          <Image src="/avatar.jpg" alt="Agency" width={32} height={32} />
        </div>
      )}

      <div className={`flex flex-col max-w-[85%] ${isUser ? "items-end" : "items-start"}`}>
        <span className="text-xs text-gray-400 mb-1 ml-1">
          {isUser ? "You" : "Radim"}
        </span>

        <div
          className={`
            text-md
            animate-[fadeIn_0.3s_ease-out_forwards]
            ${isUser
              ? "bg-[#011AFA] text-white rounded-2xl rounded-br-md px-4 py-2"
              : `rounded-2xl rounded-bl-md ${message.type === "image" || message.type === "gallery"
                ? "bg-transparent p-0"
                : "bg-[#F7F7F7] text-gray-900 px-4 py-4"
              }`}
          `}
        >
          {/* TEXT */}
          {message.type === "text" && message.content}

          {/* IMAGE */}
          {message.type === "image" && (
            <div className="relative w-full aspect-4/3 h-[300px] rounded-2xl overflow-hidden shadow-md border-2 border-gray-200 bg-gray-100 flex items-center justify-center">
              <Image
                src={message.content}
                alt="Product Design"
                fill
                unoptimized
                className="object-cover"
                priority
              />
              {!message.content && <span className="text-gray-400">Image Missing</span>}
            </div>
          )}

          {/* GALLERY */}
          {message.type === "gallery" && (
            <div className="grid grid-cols-2 gap-2">
              {message.content.map((src: string, i: number) => (
                <div
                  key={i}
                  className={`relative aspect-4/3 rounded-xl overflow-hidden shadow-sm border border-gray-100 ${i === 0 && message.content.length === 3 ? "col-span-2 aspect-video" : ""
                    }`}
                >
                  <Image
                    src={src}
                    alt={`Gallery ${i}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          )}

          {/* CTA */}
          {message.type === "cta" && (
            <div className="flex flex-col gap-3">
              <p className="leading-relaxed">
                We use slack for communication & what works best for you to give you the finished concepts. But before we get there, book a call in our calendar to see if you are the right fit.
              </p>
              <button className="w-full bg-[#011AFA] text-white py-3 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors">
                <Calendar className="w-5 h-5" />
                {message.content}
              </button>
            </div>
          )}

          {/* FORM */}
          {message.type === "form" && (
            <div className="flex flex-col gap-3">
              <p className="leading-relaxed mb-1">
                You can also just leave us a message and we’ll try to get back to you as soon as possible.
              </p>
              {submitted ? (
                <p className="text-sm text-green-600">
                  Thanks! We’ll get back to you shortly.
                </p>
              ) : (
                <div className="space-y-3">
                  <input
                    className="w-full bg-[#E5E7EB] border-none rounded-md px-4 py-3 text-sm focus:ring-1 focus:ring-gray-300 outline-none placeholder:text-gray-500"
                    placeholder="Jack Smithh"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />

                  <input
                    className="w-full bg-[#E5E7EB] border-none rounded-md px-4 py-3 text-sm focus:ring-1 focus:ring-gray-300 outline-none placeholder:text-gray-500"
                    placeholder="jack@brand.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <textarea
                    className="w-full bg-[#E5E7EB] border-none rounded-md px-4 py-3 text-sm min-h-[100px] focus:ring-1 focus:ring-gray-300 outline-none placeholder:text-gray-500 resize-none"
                    placeholder="Enter your message"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                  />

                  <button
                    onClick={submitForm}
                    disabled={loading}
                    className="w-full bg-[#E5E7EB] text-black font-medium py-3 rounded-md disabled:opacity-50 hover:bg-gray-300 transition-colors"
                  >
                    {loading ? "Sending…" : "Submit"}
                  </button>
                </div>
              )}
            </div>
          )}

          {/* START OVER */}
          {message.type === "startover" && (
            <div className="flex flex-col gap-3">
              <p>That&apos;s it for this chat! Feel free to restart the conversation.</p>
              <button
                onClick={() => window.location.reload()}
                className="w-full bg-[#E5E7EB] text-black font-medium py-3 rounded-md flex items-center justify-center gap-2 hover:bg-gray-300 transition-colors"
              >
                <RefreshCcw className="w-4 h-4" />
                Start over
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
