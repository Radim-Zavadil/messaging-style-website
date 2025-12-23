export default function TypingIndicator() {
    return (
      <div className="flex items-center gap-1 bg-gray-200 px-3 py-2 rounded-full w-fit">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="w-1.5 h-1.5 bg-gray-500 rounded-full"
            style={{
              animation: "blink 1.4s infinite both",
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>
    )
  }
  