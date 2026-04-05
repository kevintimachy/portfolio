import PageHeader from "@/components/PageHeader";
import { Badge } from "@/components/ui/badge";
import { experience } from "@/lib/experience";

export default function Experience() {
    return (
        <div className="w-full max-w-3xl mx-auto px-6 sm:px-12 py-16 flex flex-col gap-16">

            <PageHeader eyebrow="Experience" title="Where I've worked" separator />

            <div className="flex flex-col gap-px border border-border rounded-lg overflow-hidden">
                {experience.map((item, i) => (
                    <div
                        key={i}
                        className="flex flex-col gap-3 p-6 bg-card hover:bg-accent transition-colors duration-200"
                    >
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                            <div className="flex items-center gap-3">
                                <span className="font-semibold text-base">{item.title}</span>
                                <span className="text-muted-foreground">·</span>
                                <span className="text-muted-foreground text-sm">{item.company}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Badge variant="outline" className="text-xs font-normal">{item.type}</Badge>
                                <span className="text-xs text-muted-foreground font-mono">{item.period}</span>
                            </div>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                        <div className="flex flex-wrap gap-2 mt-1">
                            {item.tags.map((tag) => (
                                <Badge key={tag} variant="secondary" className="text-xs font-normal">{tag}</Badge>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}