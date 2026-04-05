import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";

const statusStyles: Record<string, string> = {
    Live: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    "In Progress": "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
    Concept: "bg-muted text-muted-foreground border-border",
};

interface ProjectCardProps {
    project: Project;
    index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
    return (
        <div className="group relative flex flex-col rounded-xl border border-border bg-card hover:border-foreground/20 transition-all duration-300 overflow-hidden">

            {/* Hover accent line */}
            <div className="absolute left-0 top-4 bottom-4 w-0.5 rounded-full bg-foreground/0 group-hover:bg-foreground/20 transition-all duration-300 z-10" />

            {/* Image */}
            <div className="relative w-full h-52 overflow-hidden bg-muted">
                {project.image ? (
                    <Image
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                        sizes="(max-width: 768px) 100vw, 768px"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center">
                        <span className="font-mono text-xs text-muted-foreground/30 tracking-widest uppercase">
                            No preview
                        </span>
                    </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-card/60 pointer-events-none" />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-4 p-6">

                {/* Title + status */}
                <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-muted-foreground/40 select-none">
                            {String(index + 1).padStart(2, "0")}
                        </span>
                        <h2 className="font-semibold text-xl tracking-tight">{project.title}</h2>
                    </div>
                    <Badge
                        variant="outline"
                        className={`text-xs font-normal shrink-0 ${statusStyles[project.status]}`}
                    >
                        {project.status}
                    </Badge>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed pl-7">
                    {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-3 pl-7">
                    {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs font-normal">
                            {tag}
                        </Badge>
                    ))}
                </div>

                {/* Links */}
                {project.links.length > 0 && (
                    <div className="flex flex-wrap gap-5 pl-7">
                        {project.links.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors duration-200"
                            >
                                {link.name}
                                <ExternalLink className="h-3 w-3" />
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}