import { useEffect, useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { api } from "@/lib/axios";

type Prompts = {
    id: string;
    template: string;
    title: string;
}

interface PromptSelectProps {
    onPromptSelect: (template: string) => void
}

export function PromptSelect(props: PromptSelectProps) {
    const [prompts, setPrompts] = useState<Prompts[] | null>(null)

    useEffect(() => {
        api.get('/prompts').then(response => setPrompts(response.data.prompts))
    }, [])

    function handlePromptSelected(promptId: string) {
        const selectedPrompt = prompts?.find(prompt => prompt.id === promptId)
        if (!selectedPrompt) {
            return
        }
        props.onPromptSelect(selectedPrompt.template)
    }

    return (
        <Select onValueChange={handlePromptSelected}>
            <SelectTrigger>
                <SelectValue placeholder='Selecione um prompt...' />
            </SelectTrigger>
            <SelectContent>
                {
                    prompts?.map(prompt => {
                        return (
                            <SelectItem key={prompt.id} value={prompt.id}>{prompt.title}</SelectItem>
                        )
                    })
                }
            </SelectContent>
        </Select>
    )
}