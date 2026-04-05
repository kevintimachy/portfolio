import ProjectCard from "@/components/ProjectCard";
import PageHeader from "@/components/PageHeader";
import { projects } from "@/lib/projects";

export default function Projects() {
    return (
        <div className="w-full max-w-3xl mx-auto px-6 sm:px-12 py-16 flex flex-col gap-16">

            <PageHeader eyebrow="Projects" title="What I've built" separator />

            <div className="flex flex-col gap-6">
                {projects.map((project, i) => (
                    <ProjectCard key={project.title} project={project} index={i} />
                ))}
            </div>

        </div>
    );
}