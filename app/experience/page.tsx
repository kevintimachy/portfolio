import PageHeader from "@/components/PageHeader";
import { Badge } from "@/components/ui/badge";

const experience = [
    {
        type: "Internship",
        title: "Software Developer Intern",
        company: "Project: Human City",
        period: "May 2025 — Aug 2025",
        description:
            "Developed production features for the Spotstitch platform as part of a 6-engineer agile team. Built reusable UI components, optimized cross-platform performance in React and React Native, and resolved sprint blockers to ensure on-time delivery.",
        tags: ["React", "React Native", "TypeScript", "Agile", "MongoDB"],
    },
    {
        type: "Freelance",
        title: "Frontend Developer",
        company: "Polycy Inc.",
        period: "Mar 2023 — Jan 2024",
        description:
            "Built a scalable web application for medical practitioners using Next.js and TypeScript. Implemented authentication flows, an admin dashboard with role-based access control, and integrated multiple REST APIs.",
        tags: ["Next.js", "TypeScript", "React", "REST APIs"],
    },
    {
        type: "Freelance",
        title: "Frontend Developer",
        company: "Shendy’s Swim Center",
        period: "Jun 2022 — Oct 2022",
        description:
            "Developed ASP.NET MVC features to streamline internal business workflows and improve productivity. Built an archive module and improved accessibility and navigation using modern HTML, CSS, and JavaScript.",
        tags: ["ASP.NET", "C#", "JavaScript", "HTML", "CSS"],
    },
];

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