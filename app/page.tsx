import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="m-auto text-center">
      <div className="flex flex-col items-center gap-6 p-12">
        <h1 className="text-5xl font-bold">Kevin Timachy</h1>

        <p className="text-xl text-muted-foreground">
          Software Developer | AI Builder
        </p>
        <div className="flex flex-row gap-6">
          <Button asChild size="lg" className="px-8 text-base bg-green-500">
            <Link href="/resume.pdf" target="_blank" rel="noreferrer">
              Resume
            </Link>
          </Button>
          <Button asChild variant="secondary" size="lg" className="px-8 text-base">
            <Link href="/about">About Me</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
