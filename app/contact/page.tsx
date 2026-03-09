"use client";

import { useActionState, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";

type ContactFormState = {
    status: "idle" | "success" | "error";
    message: string;
};

const initialState: ContactFormState = {
    status: "idle",
    message: "",
};

export default function Contact() {
    const formRef = useRef<HTMLFormElement>(null);
    const [sent, setSent] = useState(false);
    const [state, formAction, isPending] = useActionState(
        async (_prevState: ContactFormState, formData: FormData) => {
            const formId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;

            if (!formId) {
                setSent(false);
                return {
                    status: "error" as const,
                    message: "Form submission is not configured yet.",
                };
            }

            const payload = {
                name: formData.get("name")?.toString().trim() ?? "",
                email: formData.get("email")?.toString().trim() ?? "",
                message: formData.get("message")?.toString().trim() ?? "",
            };

            try {
                const response = await fetch(`https://formspree.io/f/${formId}`, {
                    method: "POST",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(payload),
                });

                if (!response.ok) {
                    const data = await response.json().catch(() => null) as
                        | { errors?: Array<{ message?: string }> }
                        | null;
                    const message = data?.errors?.[0]?.message ?? "The message could not be sent. Please try again.";
                    setSent(false);
                    return {
                        status: "error" as const,
                        message,
                    };
                }

                formRef.current?.reset();
                setSent(true);
                return {
                    status: "success" as const,
                    message: "Thanks for reaching out. I'll be in touch soon.",
                };
            } catch {
                setSent(false);
                return {
                    status: "error" as const,
                    message: "The message could not be sent. Please try again.",
                };
            }
        },
        initialState,
    );

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
                <form action={formAction} ref={formRef} className="flex flex-col gap-6 max-w-lg">
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
                    {state.status === "error" && (
                        <p className="text-sm text-destructive" aria-live="polite">
                            {state.message}
                        </p>
                    )}
                    <Button type="submit" size="lg" className="w-fit px-8" disabled={isPending}>
                        {isPending ? "Sending..." : "Send Message"}
                    </Button>
                </form>
            )}

        </div>
    );
}
