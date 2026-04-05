export type Experience = {
    type: "Internship" | "Freelance" | "Full-Time" | "Contract";
    title: string;
    company: string;
    period: string;
    description: string;
    tags: string[];
};

export const experience: Experience[] = [
    {
        type: "Internship",
        title: "Software Developer",
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
        company: "Shendy's Swim Center",
        period: "Jun 2022 — Oct 2022",
        description:
            "Developed ASP.NET MVC features to streamline internal business workflows and improve productivity. Built an archive module and improved accessibility and navigation using modern HTML, CSS, and JavaScript.",
        tags: ["ASP.NET", "C#", "JavaScript", "HTML", "CSS"],
    },
];