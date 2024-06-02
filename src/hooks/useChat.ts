import { useState } from "react"

type ChatMessage = {
    author: 'user' | 'bot',
    message: string,
    timestamp: Date
}
type Chat = ChatMessage[]

function useChat() {
    const [chat, setChat] = useState<Chat>([])
    const handleUpdateChat = (message: ChatMessage) => {
        setChat(prev => [...prev, message])
    }
    const isChatEmpty = chat.length === 0;

    return {
        chat,
        handleUpdateChat,
        isChatEmpty
    }
}

export default useChat;