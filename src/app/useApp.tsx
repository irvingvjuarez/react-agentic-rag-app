import { FormEvent } from "react";

export default function useApp() {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return {
        handleSubmit
    }
}