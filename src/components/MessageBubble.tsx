import TypingIndicator from "./TypingIndicator";
import GalleryGrid from "./GalleryGrid";

export default function MessageBubble({ message }: any) {
  const isUser = message.sender === "user"

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[75%] px-4 py-2 rounded-2xl text-sm animate-[fadeIn_0.3s_ease-out_forwards]
        ${isUser ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-900"}`}
      >
        {message.type === "text" && message.content}
        {message.type === "button" && (
          <button className="text-white font-medium">
            {message.content}
          </button>
        )}
        {message.type === "gallery" && (
          <GalleryGrid images={message.content} />
        )}
        {message.type === "form" && message.content}
      </div>
    </div>
  )
}
