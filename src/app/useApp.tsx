import useChat from "@/hooks/useChat";
import { FormEvent } from "react";
import config from '../config';

async function fetchData(query: string) {
    // const response = await fetch('/api/hello', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Authentication': `Bearer ${config.envVars.OPENAI_API_KEY}`
    //     },
    //     body: JSON.stringify({ query })
    // });

    const response = new Promise<Response>((resolve, _reject) => {
        setTimeout(() => {
            resolve({response: 'Hello, world!'} as unknown as Response);
        }, 1000);
    });

    const data = await response.then(response => response);
    return data;
}

export default function useApp() {
    const { chat, handleUpdateChat, isChatEmpty } = useChat();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            (async () => {
                const query = (e.target as HTMLFormElement).queryInput.value;
                (e.target as HTMLFormElement).queryInput.value = '';

                handleUpdateChat({message: query, author: 'user', timestamp: new Date()});

                const request = await fetchData(query);
                handleUpdateChat({message: request.response, author: 'bot', timestamp: new Date()});
            })()
        } catch (error) {
            // TODO: Show visual feedback to the user
            console.error(error);
        }
    }

    return {
        handleSubmit,
        chat,
        isChatEmpty
    }
}