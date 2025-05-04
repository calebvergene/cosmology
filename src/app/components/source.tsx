import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

interface props {
    number: number
    link: string
}

export function Source({ number, link }: props) {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <button><a href="${link}">{number}</a></button>
                </TooltipTrigger>
                <TooltipContent>
                    <a href="${link}" className="underline">{link}</a>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}
