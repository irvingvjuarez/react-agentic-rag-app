import { FormEvent } from "react";
import config from '../config';

async function fetchData() {
    const response = await fetch('/api/hello', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authentication': `Bearer ${config.envVars.OPENAI_API_KEY}`
        },
        body: JSON.stringify({ query: 'What is the text about?' })
    });
    const data = await response.json();
    return data;
}

export default function useApp() {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            fetchData().then(data => console.log(data));
        } catch (error) {
            console.error(error);
        }
    }

    return {
        handleSubmit
    }
}