"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";

export default function Contact() {
    const [sent, setSent] = useState(false);
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);
        // Replace with your form submission logic (e.g. Resend, Formspree, etc.)
        await new Promise((r) => setTimeout(r, 1000));
        setLoading(false);
        setSent(true);
    }

    return (
        <div className="w-full max-w-3xl mx-auto px-6 sm:px-12 py-16 flex flex-col gap-16">

            <div className="flex flex-col gap-4">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">Contact</p>
                <h1 className="text-5xl font-bold leading-tight tracking-tight">
                    Let&apos;s work<br />together
                </h1>
                <Separator className="w-12 mt-2" />
                <p className="text-lg text-muted-foreground leading-relaxed max-w-md mt-2">
                    Have a project in mind or just want to say hi? Fill out the form and I&apos;ll get back to you within a day or two.
                </p>
            </div>

            {sent ? (
                <div className="flex flex-col gap-3 p-8 rounded-lg border border-border bg-card">
                    <p className="font-semibold text-lg">Message sent ✓</p>
                    <p className="text-muted-foreground text-sm">Thanks for reaching out — I&apos;ll be in touch soon.</p>
                    <Button
                        variant="secondary"
                        className="w-fit mt-2"
                        onClick={() => setSent(false)}
                    >
                        Send another
                    </Button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-lg">
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="name" className="text-xs uppercase tracking-[0.15em] text-muted-foreground">Name</Label>
                        <Input id="name" name="name" placeholder="Your name" required />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="email" className="text-xs uppercase tracking-[0.15em] text-muted-foreground">Email</Label>
                        <Input id="email" name="email" type="email" placeholder="you@example.com" required />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="message" className="text-xs uppercase tracking-[0.15em] text-muted-foreground">Message</Label>
                        <Textarea
                            id="message"
                            name="message"
                            placeholder="Tell me about your project..."
                            rows={6}
                            required
                        />
                    </div>
                    <Button type="submit" size="lg" className="w-fit px-8" disabled={loading}>
                        {loading ? "Sending..." : "Send Message"}
                    </Button>
                </form>
            )}

        </div>
    );
}