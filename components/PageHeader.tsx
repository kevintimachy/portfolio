import { Separator } from "@/components/ui/separator";

interface PageHeaderProps {
    eyebrow?: string;
    title: string;
    separator?: boolean;
}

export default function PageHeader({ eyebrow, title, separator = false }: PageHeaderProps) {
    return (
        <div className="flex flex-col gap-4 animate-fade-up">
            {eyebrow && (
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">
                    {eyebrow}
                </p>
            )}
            <h1 className="text-5xl font-bold leading-tight tracking-tight">
                {title}
            </h1>
            {separator && <Separator className="w-12 mt-2" />}
        </div>
    );
}