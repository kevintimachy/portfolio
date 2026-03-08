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

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => setIsMenuOpen(false);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [isMenuOpen]);

    return (
        <>
            <nav className="bg-background/95 sticky top-0 z-50 h-20 border-b px-6 sm:px-12 backdrop-blur">
                <div className="flex h-full items-center justify-between gap-4">
                    <h1 className="m-0 text-2xl leading-none font-bold tracking-[0.2em]">timachy()</h1>

                    <div className="hidden items-center gap-6 text-sm text-secondary-foreground md:flex">
                        {navigationLinks.map((navigationLink) => (
                            <Link key={navigationLink.href} href={navigationLink.href}>
                                {navigationLink.label}
                            </Link>
                        ))}
                    </div>

                    <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="md:hidden"
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-navigation"
                        onClick={() => setIsMenuOpen((currentOpen) => !currentOpen)}
                    >
                        <span className="sr-only">Toggle navigation menu</span>
                        <svg
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            className="size-5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            {isMenuOpen ? (
                                <path d="M18 6 6 18M6 6l12 12" />
                            ) : (
                                <path d="M4 7h16M4 12h16M4 17h16" />
                            )}
                        </svg>
                    </Button>
                </div>
            </nav >

            <div
                className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-200 md:hidden ${isMenuOpen
                    ? "pointer-events-auto opacity-100"
                    : "pointer-events-none opacity-0"
                    }`}
                onClick={closeMenu}
                aria-hidden={!isMenuOpen}
            />

            <aside
                id="mobile-navigation"
                className={`bg-background fixed top-0 right-0 z-50 flex h-screen w-72 max-w-[85vw] flex-col border-l p-6 shadow-xl transition-transform duration-200 md:hidden ${isMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
                aria-hidden={!isMenuOpen}
            >
                <div className="mb-8 flex items-center justify-between">
                    <h2 className="m-0 text-xl leading-none font-bold">Menu</h2>

                    <Button type="button" variant="ghost" size="icon" onClick={closeMenu}>
                        <span className="sr-only">Close navigation menu</span>
                        <svg
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            className="size-5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M18 6 6 18M6 6l12 12" />
                        </svg>
                    </Button>
                </div>

                <div className="flex flex-col gap-4 text-sm text-secondary-foreground">
                    {navigationLinks.map((navigationLink) => (
                        <Link
                            key={navigationLink.href}
                            href={navigationLink.href}
                            onClick={closeMenu}
                        >
                            {navigationLink.label}
                        </Link>
                    ))}
                </div>

            </aside>
        </>
    );
}
