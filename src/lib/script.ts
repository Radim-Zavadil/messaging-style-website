export type Message = {
    id: string
    sender: "agency" | "user"
    type: "text" | "button" | "gallery" | "image" | "form"
    content: any
    delay?: number
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
      type: "button",
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
      id: "7",
      sender: "agency",
      type: "form",
      content: "Leave a message and we’ll get back to you.",
      typingDuration: 1000,
    },
  ]
  