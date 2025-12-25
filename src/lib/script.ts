export type MessageType =
  | "text"
  | "gallery"
  | "image"
  | "cta"
  | "form"
  | "startover"
  | "arrow"
  | "copyright"

export type Message = {
  id: string
  sender: "agency" | "user"
  type: MessageType
  content?: any
  typingDuration?: number
}
  
  
  export const script: Message[] = [
    {
      id: "1",
      sender: "agency",
      type: "text",
      content: "Static ad designs for 6–9 fig brands.",
      typingDuration: 900,
    },
    {
      id: "2",
      sender: "agency",
      type: "text",
      content: "Hi! I'm Sam from JPEGs MAFIA. How can I help?",
      typingDuration: 1200,
    },
    {
      id: "3",
      sender: "user",
      type: "text",
      content: "I'd like to see your work",
    },
    {
      id: "4",
      sender: "agency",
      type: "text",
      content:
        "Sure — here are some examples that turn 5k days into 30k ones.",
      typingDuration: 1500,
    },
    {
      id: "5",
      sender: "agency",
      type: "gallery",
      content: [
        "/placeholders/1.jpg",
        "/placeholders/2.jpg",
        "/placeholders/3.jpg",
      ],
      typingDuration: 800,
    },
    {
      id: "6",
      sender: "user",
      type: "text",
      content: "I'm interested",
    },
    {
      id: "cta",
      sender: "agency",
      type: "cta",
      content: "Work With Us",
      typingDuration: 900,
    },
    {
      id: "form",
      sender: "agency",
      type: "form",
      typingDuration: 700,
    },
    {
      id: "startover",
      sender: "agency",
      type: "startover",
    }
  ]
  