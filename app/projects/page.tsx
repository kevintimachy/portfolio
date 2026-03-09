import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { ExternalLink } from "lucide-react";


const projects = [
    {
        title: "PitchGrade",
        description:
            "A full-stack platform for professional football academies that helps teams track player performance and match ratings. Coaches can input matches and performance stats to visualize player progress and get an understanding of player development.",
        tags: ["Next.js", "TypeScript", "MongoDB", "Express.js"],
        status: "In Progress",
        links: []
    },
    {
        title: "ArtVault",
        description:
            "A digital platform for discovering and organizing artwork form the MET. Users can browse collections, save favorite pieces, and explore artists through a clean and responsive web interface.",
        tags: ["Next.js", "React", "MongoDB", "Express.js"],
        status: "Live",
        links: [
            {
                name: "Live Site",
                href: "https://artvault-seven.vercel.app/"
            },
            {
                name: "Github Frontend",
                href: "https://github.com/kevintimachy/artvault"
            },
            {
                name: "Github Backend",
                href: "https://github.com/kevintimachy/artvault-api"
            },

        ]
    },
    {
        title: "PedalNYC",
        description:
            "A data analytics dashboard that visualizes NYC CitiBike trip data. It allows users to explore ride patterns, analyze trip durations, and identify popular bike stations through interactive charts and filtering tools.",
        tags: ["Next.js", "JavaScript", "MongoDB", "Express.js"],
        status: "Live",
        links: [
            {
                name: "Live Site",
                href: "https://pedalnyc.vercel.app/"
            },
            {
                name: "Github Frontend",
                href: "https://github.com/kevintimachy/pedalnyc"
            },
            {
                name: "Github Backend",
                href: "https://github.com/kevintimachy/pedalnyc-api"
            },

        ]
    },
    {
        title: "Weather Map",
        description:
            "An interactive weather visualization tool that displays real-time weather conditions on a map. Users can explore temperature, precipitation, and weather patterns across the whole globe.",
        tags: ["React", "TypeScript", "OpenWeather API", "Maps API"],
        status: "Live",
        links: [
            {
                name: "Live Site",
                href: "https://weather-map-react-app.vercel.app/"
            },
            {
                name: "Github",
                href: "https://github.com/kevintimachy/weather-map-react-app"
            },

        ]
    },
];

const statusStyles: Record<string, string> = {
    Live: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    "In Progress": "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
    Concept: "bg-muted text-muted-foreground border-border",
};

export default function Projects() {
    return (
        <div className="w-full max-w-3xl mx-auto px-6 sm:px-12 py-16 flex flex-col gap-16">

            <div className="flex flex-col gap-4">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">Projects</p>
                <h1 className="text-5xl font-bold leading-tight tracking-tight">
                    What I&apos;ve<br />built
                </h1>
                <Separator className="w-12 mt-2" />
            </div>

            <div className="flex flex-col gap-6">
                {projects.map((project, i) => (
                    <div
                        key={i}
                        className="group relative flex flex-col gap-4 p-6 rounded-xl border border-border bg-card hover:border-foreground/20 transition-all duration-300"
                    >
                        {/* Hover accent line */}
                        <div className="absolute left-0 top-4 bottom-4 w-0.5 rounded-full bg-foreground/0 group-hover:bg-foreground/20 transition-all duration-300" />

                        {/* Top row */}
                        <div className="flex items-start justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <span className="font-mono text-xs text-muted-foreground/40 select-none">0{i + 1}</span>
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
                ))}
            </div>

        </div>
    );
}
