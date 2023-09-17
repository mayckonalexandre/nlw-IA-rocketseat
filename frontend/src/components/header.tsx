import { Button } from "./ui/button"
import { Separator } from "./ui/separator"
import { Github } from "lucide-react"


export function Header() {
    return (
        <header>
            <div className="px-6 py-6 flex items-center justify-between border-b">
                <h1 className="text-xl font-bold">upload.ai</h1>

                <div className="flex items-center gap-3">
                    <span className="text-sm text-muted-foreground">Desenvolvido com ❤️</span>

                    <Separator orientation="vertical" className="h-6" />

                    <Button variant="outline">
                        <Github className="w-4 h-4 mr-2" />
                        Github
                    </Button>
                </div>

            </div>

        </header>
    )
}