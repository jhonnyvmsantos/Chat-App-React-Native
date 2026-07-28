import { createContext, ReactNode, useContext, useMemo, useState } from "react";

import { Chat } from "@/types/chat";

interface ChatContextData {
    currentChat: Chat | null;
    setCurrentChat: (chat: Chat | null) => void;
    clearCurrentChat: () => void;
}

const ChatContext = createContext<ChatContextData | null>(null);

interface ChatProviderProps {
    children: ReactNode;
}

export function ChatProvider({ children }: ChatProviderProps) {
    const [currentChat, setCurrentChat] = useState<Chat | null>(null);
    
    function clearCurrentChat() {
        setCurrentChat(null);
    }

    const value = useMemo(
        () => ({
            currentChat,
            setCurrentChat,
            clearCurrentChat,
        }),
        [currentChat]
    );

    return (
        <ChatContext.Provider value={value}>
            {children}
        </ChatContext.Provider>
    );
}

export function useChat() {
    const context = useContext(ChatContext);

    if (!context) {
        throw new Error("useChat deve ser utilizado dentro de um ChatProvider.");
    }

    return context;
}