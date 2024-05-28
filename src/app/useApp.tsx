import { FormEvent } from "react";

async function fetchData() {
    const response = await fetch('/api/hello');
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