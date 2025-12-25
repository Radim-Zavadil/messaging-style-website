"use client"

import Image from "next/image"
import { useState } from "react"

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
        <div className="w-8 h-8 rounded-full overflow-hidden mt-1">
          <Image src="/avatar.jpg" alt="Agency" width={32} height={32} />
        </div>
      )}

      <div
        className={`
          max-w-[85%]
          text-sm
          animate-[fadeIn_0.3s_ease-out_forwards]
          ${isUser
            ? "bg-blue-600 text-white rounded-2xl rounded-br-md px-4 py-2"
            : "bg-gray-100 text-gray-900 rounded-2xl rounded-bl-md px-4 py-2"}
        `}
      >
        {/* TEXT */}
        {message.type === "text" && message.content}

        {/* CTA */}
        {message.type === "cta" && (
          <button className="w-full bg-blue-600 text-white py-2 rounded-full font-medium">
            {message.content}
          </button>
        )}

        {/* FORM */}
        {message.type === "form" && (
          <>
            {submitted ? (
              <p className="text-sm text-green-600">
                Thanks! We’ll get back to you shortly.
              </p>
            ) : (
              <div className="space-y-2">
                <input
                  className="w-full border rounded-md px-3 py-2 text-sm"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <input
                  className="w-full border rounded-md px-3 py-2 text-sm"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <textarea
                  className="w-full border rounded-md px-3 py-2 text-sm"
                  placeholder="Message"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />

                <button
                  onClick={submitForm}
                  disabled={loading}
                  className="w-full bg-gray-900 text-white py-2 rounded-md disabled:opacity-50"
                >
                  {loading ? "Sending…" : "Submit"}
                </button>
              </div>
            )}
          </>
        )}

        {/* START OVER */}
        {message.type === "startover" && (
          <button
            onClick={() => window.location.reload()}
            className="text-gray-400 text-sm"
          >
            Start over
          </button>
        )}
      </div>
    </div>
  )
}
