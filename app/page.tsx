"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const NAME = "Kevin Timachy";
const ROLE = "Full-Stack Developer";

export default function Home() {
  const [nameText, setNameText] = useState("");
  const [roleText, setRoleText] = useState("");
  const [phase, setPhase] = useState<"name" | "role" | "done">("name");
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    if (phase === "name") {
      if (nameText.length < NAME.length) {
        const t = setTimeout(() => setNameText(NAME.slice(0, nameText.length + 1)), 65);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setPhase("role"), 300);
        return () => clearTimeout(t);
      }
    }
    if (phase === "role") {
      if (roleText.length < ROLE.length) {
        const t = setTimeout(() => setRoleText(ROLE.slice(0, roleText.length + 1)), 55);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => { setPhase("done"); setShowButtons(true); }, 400);
        return () => clearTimeout(t);
      }
    }
  }, [phase, nameText, roleText]);

  return (
    <div className="m-auto text-center">
      <div className="flex flex-col items-center gap-6 p-12">

        <h1 className="text-5xl font-bold min-h-[1.2em]">
          {nameText}
          {phase === "name" && (
            <span className="inline-block w-[2px] h-[0.9em] bg-foreground ml-[2px] align-middle animate-blink" />
          )}
        </h1>

        <p className="text-xl text-muted-foreground min-h-[1.6em] flex items-center">
          {roleText}
          {phase === "role" && (
            <span className="inline-block w-[2px] h-[0.85em] bg-muted-foreground ml-[1px] align-middle animate-blink" />
          )}
          {phase === "done" && (
            <span className="inline-block w-[2px] h-[0.85em] bg-muted-foreground ml-[1px] align-middle animate-blink" />
          )}
        </p>

        <div
          className={`flex flex-row gap-6 transition-opacity duration-500 ${showButtons ? "opacity-100" : "opacity-0"}`}
        >
          <Button asChild size="lg" className="px-8">
            <Link href="/resume.pdf" target="_blank" rel="noreferrer">Resume</Link>
          </Button>
          <Button asChild variant="secondary" size="lg" className="px-8">
            <Link href="/about">About Me</Link>
          </Button>
        </div>

      </div>
    </div>
  );
}