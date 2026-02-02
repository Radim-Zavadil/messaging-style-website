import Header from "@/components/Header"
import ChatFooter from "@/components/ChatFooter"
import TopModal from "@/components/TopModal"

export default function FormPage() {
    return (
        <main className="bg-white min-h-screen flex flex-col">

            <div className="flex-1 flex items-center justify-center px-4">
                <div className="w-full max-w-[420px] bg-[#1a1a1a] rounded-xl p-6 shadow-2xl">
                    <form className="space-y-6">
                        <div className="space-y-2">
                            <label className="block text-white text-base font-medium">
                                Brand Name
                            </label>
                            <input
                                type="text"
                                placeholder="Brand"
                                className="w-full bg-[#f3f4f6] text-gray-900 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-gray-400"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-white text-base font-medium">
                                Contact Email
                            </label>
                            <input
                                type="email"
                                placeholder="brand@gmail.com"
                                className="w-full bg-[#f3f4f6] text-gray-900 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-gray-400"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#0020c2] text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors mt-2"
                        >
                            Next
                        </button>
                    </form>
                </div>
            </div>

            <ChatFooter />
        </main>
    )
}
