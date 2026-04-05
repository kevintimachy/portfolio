import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function About() {
    return (
        <div className="w-full max-w-3xl mx-auto px-6 sm:px-12 py-16 flex flex-col gap-16">

            <PageHeader eyebrow="About Me" title="The person behind the code" separator />

            <div className="flex flex-col gap-6 text-muted-foreground text-lg leading-relaxed max-w-xl">
                <p>
                    I&apos;m Kevin — an ex professional footballer turned software developer. Currently, I&apos;m based in Toronto with a passion for building things that actually matter. I got into development because I loved the idea that you could turn nothing into something.
                </p>
                <p>
                    These days I&apos;m especially interested in UI, AI, and data analytics and what it means for how we build software. I spend a lot of time thinking about how to make complex tools feel simple and intuitive for the people using them.
                </p>
                <p>
                    Outside of work I enjoy making music and DJing to express my creative side. I focus on my health and fitness and love to challenge myself with new expierences. I think sports and software have a lot in common: both reward preparation, precision, and knowing when to improvise.
                </p>
            </div>

            <div className="flex flex-row gap-3">
                <Button asChild size="lg" className="px-8">
                    <Link href="/projects">See My Work</Link>
                </Button>
                <Button asChild variant="secondary" size="lg" className="px-8">
                    <Link href="/contact">Get In Touch</Link>
                </Button>
            </div>

        </div>
    );
}