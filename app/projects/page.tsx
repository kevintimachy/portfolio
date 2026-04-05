import { Separator } from "@/components/ui/separator";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

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
                    <ProjectCard key={project.title} project={project} index={i} />
                ))}
            </div>

        </div>
    );
}