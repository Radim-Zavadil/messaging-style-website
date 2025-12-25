"use client"
export default function ChatFooter() {
    return (
      <div className="px-4 py-6 space-y-4">
  
        <div className="flex justify-center">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-gray-400 text-xl"
          >
            ↑
          </button>
        </div>
  
        <p className="text-center text-xs text-gray-400 pt-4">
          © 2026 Messenger · @youragency
        </p>
      </div>
    )
  }
  