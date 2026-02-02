"use client"

import { useEffect, useState, useRef } from "react"
import { script, Message } from "@/lib/script"
import MessageBubble from "./MessageBubble"
import TypingIndicator from "./TypingIndicator"

export default function ChatContainer() {
  const [messages, setMessages] = useState<Message[]>([])
  const [typing, setTyping] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let delay = 0

    script.forEach((msg) => {
      if (msg.sender === "agency") {
        delay += msg.typingDuration || 2000
        setTimeout(() => setTyping(true), delay - 1000)
        setTimeout(() => {
          setTyping(false)
          setMessages((m) => [...m, msg])
        }, delay)
      } else {
        delay += 1500
        setTimeout(() => {
          setMessages((m) => [...m, msg])
        }, delay)
      }
    })
  }, [])

  useEffect(() => {
    containerRef.current?.scrollTo({
      top: containerRef.current.scrollHeight,
      behavior: "smooth",
    })
  }, [messages, typing])

  return (
    <div
      ref={containerRef}
      className="flex flex-col gap-3 p-4 max-w-md mx-auto"
    >
      {messages.map((m) => (
        <MessageBubble key={m.id} message={m} />
      ))}
      {typing && <TypingIndicator />}
    </div>
  )
}
