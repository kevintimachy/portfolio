export type Project = {
    title: string;
    description: string;
    tags: string[];
    status: "Live" | "In Progress" | "Concept";
    image: string | null;
    links: { name: string; href: string }[];
};

export const projects: Project[] = [
    {
        title: "PitchGrade",
        description:
            "A full-stack platform for professional football academies that helps teams track player performance and match ratings. Coaches can input matches and performance stats to visualize player progress and understand player development.",
        tags: ["Next.js", "TypeScript", "MongoDB", "Express.js"],
        status: "In Progress",
        image: "/images/pitchgrade.png",
        links: [],
    },
    {
        title: "Lumière Hair",
        description:
            "A luxury salon concept website for a Toronto-based hair studio. Features a refined editorial design with bespoke service listings, gallery, and booking flow — built to reflect high-end brand identity.",
        tags: ["Next.js", "TypeScript", "Tailwind CSS v4"],
        status: "Live",
        image: "/images/lumiere.png",
        links: [
            { name: "Live Site", href: "https://lumiere-hair.vercel.app/" },
            { name: "GitHub", href: "https://github.com/kevintimachy/lumiere-hair" },
        ],
    },
    {
        title: "Crestfield Contracting",
        description:
            "A professional landing page for a Toronto general contracting firm. Showcases services, past projects, and testimonials with polished animations and a conversion-focused layout.",
        tags: ["Next.js", "TypeScript", "Tailwind CSS v4", "Framer Motion"],
        status: "Live",
        image: "/images/crestfield.png",
        links: [
            { name: "Live Site", href: "https://crestfield-contracting.vercel.app/" },
            { name: "GitHub", href: "https://github.com/kevintimachy/crestfield-contracting" },
        ],
    },

    {
        title: "ArtVault",
        description:
            "A digital platform for discovering and organizing artwork from the MET. Users can browse collections, save favorite pieces, and explore artists through a clean and responsive web interface.",
        tags: ["Next.js", "React", "MongoDB", "Express.js"],
        status: "Live",
        image: "/images/artvault.png",
        links: [
            { name: "Live Site", href: "https://artvault-seven.vercel.app/" },
            { name: "GitHub Frontend", href: "https://github.com/kevintimachy/artvault" },
            { name: "GitHub Backend", href: "https://github.com/kevintimachy/artvault-api" },
        ],
    },
    {
        title: "PedalNYC",
        description:
            "A data analytics dashboard that visualizes NYC CitiBike trip data. Users can explore ride patterns, analyze trip durations, and identify popular bike stations through interactive charts and filtering tools.",
        tags: ["Next.js", "JavaScript", "MongoDB", "Express.js"],
        status: "Live",
        image: "/images/pedalnyc.png",
        links: [
            { name: "Live Site", href: "https://pedalnyc.vercel.app/" },
            { name: "GitHub Frontend", href: "https://github.com/kevintimachy/pedalnyc" },
            { name: "GitHub Backend", href: "https://github.com/kevintimachy/pedalnyc-api" },
        ],
    },
    {
        title: "Weather Map",
        description:
            "An interactive weather visualization tool that displays real-time weather conditions on a map. Users can explore temperature, precipitation, and weather patterns across the globe.",
        tags: ["React", "TypeScript", "OpenWeather API", "Maps API"],
        status: "Live",
        image: "/images/weathermap.png",
        links: [
            { name: "Live Site", href: "https://weather-map-react-app.vercel.app/" },
            { name: "GitHub", href: "https://github.com/kevintimachy/weather-map-react-app" },
        ],
    },
];