import Header from "@/components/Header"
import ChatContainer from "@/components/ChatContainer"
import ChatFooter from "@/components/ChatFooter"
import TopModal from "@/components/TopModal"

export default function Home() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <TopModal />
      <Header />
      <ChatContainer />
      <ChatFooter />
    </main>
  )
}
