"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

const navigationLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/experience", label: "Experience" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
];

const GITHUB_URL = "https://github.com/kevintimachy";

const GitHubIcon = () => (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
);

const navLinkClass = "text-muted-foreground hover:text-foreground transition-colors duration-200";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const closeMenu = () => setIsMenuOpen(false);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [isMenuOpen]);

    return (
        <>
            <nav className="bg-background/95 sticky top-0 z-50 h-20 border-b px-6 sm:px-12 backdrop-blur">
                <div className="flex h-full items-center justify-between gap-4">
                    <Link href="/" className="m-0 text-2xl leading-none font-bold tracking-[0.2em] text-foreground hover:text-muted-foreground transition-colors duration-200">
                        timachy()
                    </Link>

                    <div className="hidden items-center gap-6 text-sm md:flex">
                        {navigationLinks.map((link) => (
                            <Link key={link.href} href={link.href} className={navLinkClass}>
                                {link.label}
                            </Link>
                        ))}
                        <Link href={GITHUB_URL} target="_blank" rel="noreferrer" aria-label="GitHub" className={navLinkClass}>
                            <GitHubIcon />
                        </Link>
                    </div>

                    <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="md:hidden text-muted-foreground hover:text-foreground transition-colors duration-200"
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-navigation"
                        onClick={() => setIsMenuOpen((o) => !o)}
                    >
                        <span className="sr-only">Toggle navigation menu</span>
                        <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            {isMenuOpen ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
                        </svg>
                    </Button>
                </div>
            </nav>

            <div
                className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-200 md:hidden ${isMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
                onClick={closeMenu}
                aria-hidden={!isMenuOpen}
            />

            <aside
                id="mobile-navigation"
                className={`bg-background fixed top-0 right-0 z-50 flex h-screen w-72 max-w-[85vw] flex-col border-l p-6 shadow-xl transition-transform duration-200 md:hidden ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
                aria-hidden={!isMenuOpen}
            >
                <div className="mb-8 flex items-center justify-between">
                    <h2 className="m-0 text-xl leading-none font-bold">Menu</h2>
                    <Button type="button" variant="ghost" size="icon" onClick={closeMenu} className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                        <span className="sr-only">Close navigation menu</span>
                        <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 6 6 18M6 6l12 12" />
                        </svg>
                    </Button>
                </div>

                <div className="flex flex-col gap-4 text-sm">
                    {navigationLinks.map((link) => (
                        <Link key={link.href} href={link.href} onClick={closeMenu} className={navLinkClass}>
                            {link.label}
                        </Link>
                    ))}
                    <Link href={GITHUB_URL} target="_blank" rel="noreferrer" onClick={closeMenu} className={`flex items-center gap-2 ${navLinkClass}`}>
                        <GitHubIcon />
                        GitHub
                    </Link>
                </div>
            </aside>
        </>
    );
}